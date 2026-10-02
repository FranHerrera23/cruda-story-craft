"""
Captura del ANTES · web vieja de M2Develop
Case study CRUDA · 2026-10

Qué hace, por página y por tamaño (desktop 1440 / mobile 390):
  1. Captura de página completa (PNG, a 2x)
  2. Copia del HTML renderizado
  3. Grabación de pantalla con scroll lento (WEBM)
Y además: pide a Wayback Machine que archive cada página hoy, y deja un
capture-log.md con fecha, hora, URL, status y archivos.

Si el sitio bloquea el navegador automático, NO intenta saltarlo: se
detiene y lo deja escrito en el log para que Fran grabe con QuickTime.

Uso:
  pip install playwright requests
  playwright install chromium
  python capture_before.py --out ./01-assets/before
"""

import argparse
import datetime as dt
import json
import re
import sys
import time
from pathlib import Path
from urllib.parse import urljoin, urlparse

import requests
from playwright.sync_api import sync_playwright

BASE = "https://www.m2develop.com"
SEED_PATHS = ["/", "/our-mission", "/projects", "/contact"]
MAX_PAGES = 20  # techo por si /projects tiene subpáginas

DESKTOP = dict(viewport={"width": 1440, "height": 900}, device_scale_factor=2)
MOBILE_UA = (
    "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 "
    "(KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1"
)
MOBILE = dict(
    viewport={"width": 390, "height": 844},
    device_scale_factor=3,
    is_mobile=True,
    has_touch=True,
    user_agent=MOBILE_UA,
)
SIZES = {"desktop": DESKTOP, "mobile": MOBILE}

# Velocidad del scroll grabado (px por segundo). Lento, para que se lea.
SCROLL_SPEED = {"desktop": 260, "mobile": 200}
HOLD_TOP_S = 2.5
HOLD_BOTTOM_S = 2.0

BLOCK_SIGNS = re.compile(r"access denied|captcha|are you a robot|forbidden|blocked", re.I)


class Blocked(Exception):
    pass


def slug(path: str) -> str:
    s = path.strip("/").replace("/", "-")
    return s or "home"


def check_blocked(resp, page):
    status = resp.status if resp else None
    title = page.title()
    if status in (403, 429, 503) or BLOCK_SIGNS.search(title or ""):
        raise Blocked(f"status={status} title={title!r}")
    return status, title


def load_everything(page):
    """Baja hasta el fondo en pasos para disparar el lazy-load de Wix, y vuelve arriba."""
    height = page.evaluate("document.body.scrollHeight")
    y = 0
    while y < height:
        y += 600
        page.evaluate(f"window.scrollTo(0, {y})")
        page.wait_for_timeout(250)
        height = page.evaluate("document.body.scrollHeight")
    page.wait_for_timeout(1500)
    page.evaluate("window.scrollTo(0, 0)")
    page.wait_for_timeout(800)


def slow_scroll(page, px_per_s):
    """Scroll continuo a velocidad constante, ~60 pasos por segundo."""
    page.evaluate(
        """async (speed) => {
            const step = speed / 60;
            const sleep = ms => new Promise(r => setTimeout(r, ms));
            let last = -1;
            while (true) {
                window.scrollBy(0, step);
                await sleep(1000 / 60);
                const y = window.scrollY;
                if (y === last) break;   // llegó al fondo
                last = y;
            }
        }""",
        px_per_s,
    )


def discover_pages(browser):
    ctx = browser.new_context(**DESKTOP)
    page = ctx.new_page()
    found = list(SEED_PATHS)
    for p in SEED_PATHS[:3]:
        resp = page.goto(BASE + p, wait_until="networkidle", timeout=60000)
        check_blocked(resp, page)
        hrefs = page.eval_on_selector_all("a[href]", "els => els.map(e => e.href)")
        for h in hrefs:
            u = urlparse(urljoin(BASE, h))
            if u.netloc.endswith("m2develop.com") and u.path not in found:
                if not re.search(r"\.(jpg|png|pdf)$", u.path, re.I):
                    found.append(u.path or "/")
    ctx.close()
    return found[:MAX_PAGES]


def wayback_save(url, log):
    try:
        r = requests.get("https://web.archive.org/save/" + url, timeout=90)
        log.append(f"- Wayback save `{url}` → HTTP {r.status_code}")
    except Exception as e:
        log.append(f"- Wayback save `{url}` → error: {e}")


def wayback_snapshots(log):
    try:
        r = requests.get(
            "https://web.archive.org/cdx/search/cdx",
            params={"url": "m2develop.com/*", "output": "json", "fl": "timestamp,original,statuscode",
                    "filter": "statuscode:200", "collapse": "digest"},
            timeout=60,
        )
        rows = r.json()[1:] if r.ok and r.text.strip() else []
        log.append(f"- Snapshots previos en Wayback (200, sin duplicados): {len(rows)}")
        for ts, orig, _ in rows[-15:]:
            log.append(f"  - https://web.archive.org/web/{ts}/{orig}")
    except Exception as e:
        log.append(f"- Consulta CDX de Wayback → error: {e}")


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--out", default="./01-assets/before")
    ap.add_argument("--skip-wayback", action="store_true")
    args = ap.parse_args()

    out = Path(args.out)
    (out / "video-raw").mkdir(parents=True, exist_ok=True)
    now = dt.datetime.now(dt.timezone.utc)
    date = now.strftime("%Y-%m-%d")
    log = [
        "# Captura del ANTES · m2develop.com",
        f"- Fecha de captura (UTC): {now.isoformat(timespec='seconds')}",
        f"- Fecha local: {dt.datetime.now().isoformat(timespec='seconds')}",
        "",
        "## Páginas",
    ]

    with sync_playwright() as pw:
        browser = pw.chromium.launch()
        try:
            pages = discover_pages(browser)
            log.append(f"Detectadas: {', '.join(pages)}")
            log.append("")

            for size, opts in SIZES.items():
                for path in pages:
                    url = BASE + path
                    name = f"{date}-before-{slug(path)}-{size}"

                    # 1 y 2 · captura completa + HTML
                    ctx = browser.new_context(**opts)
                    page = ctx.new_page()
                    resp = page.goto(url, wait_until="networkidle", timeout=60000)
                    status, title = check_blocked(resp, page)
                    load_everything(page)
                    page.screenshot(path=out / f"{name}.png", full_page=True)
                    (out / f"{name}.html").write_text(page.content(), encoding="utf-8")
                    ctx.close()

                    # 3 · grabación con scroll lento
                    rec = browser.new_context(
                        **opts,
                        record_video_dir=str(out / "video-raw"),
                        record_video_size=opts["viewport"],
                    )
                    page = rec.new_page()
                    page.goto(url, wait_until="networkidle", timeout=60000)
                    load_everything(page)  # que las imágenes ya estén cuando pase el scroll
                    page.wait_for_timeout(int(HOLD_TOP_S * 1000))
                    slow_scroll(page, SCROLL_SPEED[size])
                    page.wait_for_timeout(int(HOLD_BOTTOM_S * 1000))
                    video = page.video
                    rec.close()
                    Path(video.path()).rename(out / f"{name}.webm")

                    log.append(f"- `{path}` · {size} · HTTP {status} · \"{title}\" → `{name}.png/.html/.webm`")
                    print("ok", name)

        except Blocked as b:
            log += ["", "## ⚠️ BLOQUEADO", f"El sitio rechazó el navegador automático ({b}).",
                    "No se intentó saltar el bloqueo. Grabar con QuickTime a mano."]
            print("BLOQUEADO:", b, file=sys.stderr)
        finally:
            browser.close()

    if not args.skip_wayback:
        log += ["", "## Wayback Machine"]
        for path in SEED_PATHS:
            wayback_save(BASE + path, log)
            time.sleep(8)  # Save Page Now limita la frecuencia
        wayback_snapshots(log)

    (out / f"{date}-capture-log.md").write_text("\n".join(log) + "\n", encoding="utf-8")
    try:
        (out / "video-raw").rmdir()
    except OSError:
        pass
    print("\nListo. Log:", out / f"{date}-capture-log.md")


if __name__ == "__main__":
    main()
