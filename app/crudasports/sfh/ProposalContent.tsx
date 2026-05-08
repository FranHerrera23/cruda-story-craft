'use client';

import { useEffect } from 'react';

export default function ProposalContent() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll('.proposal-wrapper .reveal').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="proposal-wrapper">
      <header className="doc-header">
        <div className="container">
          <div className="doc-meta">
            <span><span className="accent-dot"></span>CRUDA SPORTS × SAMURAI FIGHT HOUSE</span>
            <span>STRATEGIC PROPOSAL — MAY 2026</span>
          </div>
        </div>
      </header>

      <section className="hero">
        <div className="container">
          <div className="hero-tag reveal">
            <span className="accent">●</span> CONFIDENTIAL · PREPARED FOR MARTIN PAKCIARZ
          </div>
          <h1 className="reveal">
            Building SFH's<br />
            <em>commercial infrastructure.</em>
          </h1>

          <div className="hero-quote reveal">
            <p>"To build a brand that changes lives for athletes — and to make SFH the path to the UFC."</p>
            <div className="attr">— Martin Pakciarz</div>
          </div>

          <p className="lead reveal" style={{ maxWidth: '780px', color: 'var(--ink-muted)' }}>
            CRUDA Sports exists to make that vision financeable. Sponsorship revenue is the means. The end is the infrastructure that lets fighters get paid, events get funded, and the institution behind UFC top 10 talent operate with the commercial machine its sporting credibility already deserves.
          </p>

          <div className="hero-meta reveal">
            <div className="hero-meta-item">
              <div className="label">Prepared by</div>
              <div className="value">Fran Herrera + Pablo Cabona</div>
            </div>
            <div className="hero-meta-item">
              <div className="label">For</div>
              <div className="value">Martin Pakciarz, SFH</div>
            </div>
            <div className="hero-meta-item">
              <div className="label">Start date</div>
              <div className="value">June 1, 2026</div>
            </div>
            <div className="hero-meta-item">
              <div className="label">Term</div>
              <div className="value">12 months + 12 optional</div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-label reveal">01 — Inventory</div>
          <h2 className="reveal">A full commercial audit of SFH's monetizable assets.</h2>
          <p className="reveal muted" style={{ maxWidth: '760px' }}>
            54 monetizable assets mapped across event branding, venue activation, broadcast, digital, annual sponsorship, and fan monetization — benchmarked against UFC, PFL, ONE Championship, and Bellator structures. The inventory is larger than it appears.
          </p>

          <div className="inventory-grid reveal">
            <div className="inventory-cell">
              <div className="num">10</div>
              <div className="label">Physical Event Branding</div>
              <div className="desc">Octagon canvas, corner pads, cage panels, perimeter LED, walkout kits, weigh-in backdrops, press conference, entrance tunnel, venue signage.</div>
            </div>
            <div className="inventory-cell">
              <div className="num">6</div>
              <div className="label">Venue Activation</div>
              <div className="desc">On-site activation booths, hospitality areas, sampling rights, sponsored bonus delivery, fan packages, VIP and backstage access.</div>
            </div>
            <div className="inventory-cell">
              <div className="num">7</div>
              <div className="label">Broadcast & Streaming</div>
              <div className="desc">Live stream presenting sponsor, sponsored KO graphics, fight stats, replay branding, lower thirds, official event clock, pre/post-event analysis.</div>
            </div>
            <div className="inventory-cell">
              <div className="num">7</div>
              <div className="label">Digital & Social</div>
              <div className="desc">Co-branded SFH posts, branded hashtags, sponsored highlight clips, social contests, behind-the-scenes content, post-event audience reports.</div>
            </div>
            <div className="inventory-cell">
              <div className="num">11</div>
              <div className="label">Annual Brand Sponsorship</div>
              <div className="desc">Category exclusivity, year-round digital presence, newsletter inclusion, social posts, PR mentions, co-branded merchandise, brand licensing, audience data access.</div>
            </div>
            <div className="inventory-cell">
              <div className="num">4</div>
              <div className="label">Fan Monetization</div>
              <div className="desc">VIP fan packages, early-bird ticketing with sponsor benefits, integrated experiences. Activates as audience database matures.</div>
            </div>
          </div>

          <div className="inventory-summary reveal">
            <div className="text">Total monetizable assets at full ceiling. Excludes emerging formats (virtual overlays, fan tokens, betting partnerships) — additional upside in Year 2+.</div>
            <div>
              <div className="number">54</div>
              <div className="number-sub">Mapped Assets</div>
            </div>
          </div>

          <p className="reveal muted" style={{ marginTop: '32px', fontSize: '14px' }}>
            Detailed inventory with floor and ceiling values per asset is available as a separate working document.
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-label reveal">02 — Revenue Scenarios</div>
          <h2 className="reveal">Bounded estimates. Real market floors.</h2>
          <p className="reveal muted" style={{ maxWidth: '760px' }}>
            Three scenarios for June–December 2026, modeled on asset penetration rates. Not projections — bounded estimates against industry benchmarks.
          </p>

          <div className="scenarios-wrap reveal">
            <table className="scenarios-table">
              <thead>
                <tr>
                  <th className="label">Scenario</th>
                  <th className="scenario"><span className="name">Conservative</span><span className="pen">~15% penetration</span></th>
                  <th className="scenario base"><span className="name">Base</span><span className="pen">~35% penetration</span></th>
                  <th className="scenario"><span className="name">Optimistic</span><span className="pen">~60% penetration</span></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Events in period</td>
                  <td className="value">3</td>
                  <td className="value base">4</td>
                  <td className="value">5</td>
                </tr>
                <tr>
                  <td>Track B — Event sponsors</td>
                  <td className="value">$75,975</td>
                  <td className="value base">$235,300</td>
                  <td className="value">$490,000</td>
                </tr>
                <tr>
                  <td>Track A — Brand sponsors (annual)</td>
                  <td className="value">$31,500</td>
                  <td className="value base">$78,750</td>
                  <td className="value">$189,000</td>
                </tr>
                <tr>
                  <td>Track C — Fan monetization</td>
                  <td className="value">$2,900</td>
                  <td className="value base">$2,900</td>
                  <td className="value">$5,800</td>
                </tr>
                <tr className="total">
                  <td>Total gross sponsorship</td>
                  <td className="value">$110,375</td>
                  <td className="value">$316,950</td>
                  <td className="value">$684,800</td>
                </tr>
                <tr className="commission">
                  <td>CRUDA · 25% of gross</td>
                  <td className="value">$27,594</td>
                  <td className="value">$79,238</td>
                  <td className="value">$171,200</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="reveal muted" style={{ marginTop: '16px', fontSize: '14px' }}>
            Penetration rates reflect realistic floors for a first commercial year. Year 2+ scenarios scale as inventory matures, renewals stack, and emerging formats activate.
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-label reveal">03 — How We Work</div>
          <h2 className="reveal">One term governs everything.</h2>

          <div className="single-number reveal">
            <div className="label">CRUDA Compensation</div>
            <div className="pct">25%</div>
            <div className="desc">of gross sponsorship revenue generated. No monthly fees. No retainers. No tiered structures.</div>
          </div>

          <p className="reveal" style={{ maxWidth: '760px' }}>
            CRUDA earns when SFH earns. We take on the full commercial work: identifying prospects, packaging inventory, pitching, negotiating, closing, activating, reporting. SFH retains every asset, every relationship, and all infrastructure built — from day one.
          </p>

          <div className="callout reveal">
            <p>"Every sponsorship conversation flows through CRUDA — including inbound that arrives directly to SFH. The reason is brand DNA: a coherent sponsor portfolio multiplies brand equity. A fragmented one dilutes it."</p>
          </div>

          <h4 className="reveal" style={{ marginTop: '64px' }}>Commercial Terms</h4>
          <div className="terms-list">
            <div className="term-row reveal">
              <div className="term-label">Compensation</div>
              <div className="term-value">25% of gross sponsorship revenue. Calculated on the gross — before any event production, operational, or third-party costs. CRUDA does not control event-side spending, and commissions are not reduced by it.</div>
            </div>
            <div className="term-row reveal">
              <div className="term-label">Exclusivity</div>
              <div className="term-value">SFH commits to CRUDA as the sole partner for sponsorship and commercial activation work during the term. If a brand approaches SFH directly, the conversation is delegated to CRUDA for negotiation. The intent is brand coherence — sponsors aligned with SFH, the fighters, and the audience build equity. Fragmented sponsors dilute it.</div>
            </div>
            <div className="term-row reveal">
              <div className="term-label">Term</div>
              <div className="term-value">12 months initial, with optional 12-month extension. Mandatory review at month 12 with full opt-out for both parties. No automatic renewal.</div>
            </div>
            <div className="term-row reveal">
              <div className="term-label">Asset ownership</div>
              <div className="term-value">All websites, CRM data, audience database, and infrastructure are owned by SFH from day one. SFH covers running costs of the infrastructure built (hosting, CRM, email platform, software subscriptions) — estimated $150–$400/month total.</div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-label reveal">04 — What We Build to Get There</div>
          <h2 className="reveal">$30,000 USD invested by CRUDA. Recovered only through commission.</h2>
          <p className="reveal" style={{ maxWidth: '780px' }}>
            To pitch SFH credibly to enterprise sponsors, the foundation has to be in place first. The infrastructure below is what we need to build before sponsor conversations carry weight. CRUDA builds it. SFH owns it from day one. We are recovered through commission.
          </p>

          <h4 className="reveal" style={{ marginTop: '64px' }}>CRUDA's Investment Breakdown</h4>
          <div className="investment-table reveal">
            <div className="investment-row">
              <div className="item">
                Samurai Fight House website + CMS
                <div className="sub">Brand site, event hub, sponsor-facing inventory presentation</div>
              </div>
              <div className="amount">$7,000</div>
            </div>
            <div className="investment-row">
              <div className="item">
                Athlete brand sites — Chino + Ailín
                <div className="sub">Sponsor-facing platforms positioning both UFC top 10 fighters</div>
              </div>
              <div className="amount">$6,000</div>
            </div>
            <div className="investment-row">
              <div className="item">
                Martin Pakciarz personal brand site
                <div className="sub">Operator and management positioning</div>
              </div>
              <div className="amount">$3,000</div>
            </div>
            <div className="investment-row">
              <div className="item">
                Owned audience infrastructure
                <div className="sub">Database, CRM, segmentation, event capture flows, newsletter</div>
              </div>
              <div className="amount">$5,000</div>
            </div>
            <div className="investment-row">
              <div className="item">
                LinkedIn + X content production
                <div className="sub">Ghostwriting and content strategy for Chino, Ailín, and Martin — six months</div>
              </div>
              <div className="amount">$6,000</div>
            </div>
            <div className="investment-row">
              <div className="item">
                Sponsor decks + audience data pack
                <div className="sub">Track A, Track B, and Track C pitch infrastructure</div>
              </div>
              <div className="amount">$3,000</div>
            </div>
            <div className="investment-row total">
              <div className="item">Total CRUDA Investment
                <div className="sub">Recovered exclusively through commission on gross sponsorship revenue</div>
              </div>
              <div className="amount">$30,000</div>
            </div>
          </div>

          <p className="reveal muted" style={{ marginTop: '24px', fontSize: '14px' }}>
            All assets become property of SFH from day one. If the partnership ends, SFH retains every website, the CRM, the audience database, every deck, and every piece of infrastructure built — without exception.
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-label reveal">05 — The Plan</div>
          <h2 className="reveal">Quarterly objectives.<br /><em>Built around what we control.</em></h2>

          <div className="callout reveal">
            <p>"We commit to building the ecosystem and opening the conversations. We don't commit to closing dates we don't fully control. Sponsorship cycles depend on each brand's internal calendar, budget approval, and category fit. Our job: make sure that when those conditions align, the inventory is packaged, the data is ready, and the conversation is already warm."</p>
          </div>

          <div className="quarters">
            <div className="quarter reveal">
              <div className="quarter-num">
                Q2 · 2026
                <span className="period">June</span>
              </div>
              <div className="quarter-content">
                <h3>Foundation. Audit. First listening exercise.</h3>
                <div className="deliverables">
                  <h4>Deliverables</h4>
                  <ul>
                    <li>SFH website live (full month dedicated)</li>
                    <li>360º audit of the June 7 event delivered as a deck — findings, recommendations, sponsor activation observations</li>
                    <li>1–2 ideal-fit observer brands invited to June 7 (selection criteria: CRUDA's, based on brand-DNA fit and long-term sponsorship potential)</li>
                    <li>Initial target list of sponsor prospects documented</li>
                    <li>Sponsor outreach conversations opened</li>
                  </ul>
                </div>
                <div className="no-promise">
                  <h4>What we don't promise</h4>
                  <p>No paid sponsors closed for the June 7 event. We can. We don't recommend it. Pitching with an incomplete ecosystem burns relationships we'll need later. June 7 is our intelligence-gathering window — not a sales push.</p>
                </div>
              </div>
            </div>

            <div className="quarter reveal">
              <div className="quarter-num">
                Q3 · 2026
                <span className="period">Jul – Sep</span>
              </div>
              <div className="quarter-content">
                <h3>Ecosystem complete. Conversations advancing.</h3>
                <div className="deliverables">
                  <h4>Deliverables</h4>
                  <ul>
                    <li>Athlete landing pages live: Chino, Ailín, Martin</li>
                    <li>LinkedIn + X cadence active for all three (minimum 4 posts/month each)</li>
                    <li>Audience database operational with capture flows running at events</li>
                    <li>Track A and Track B sponsor decks finalized</li>
                    <li>Audience data pack delivered, based on Q2–Q3 events</li>
                    <li>Minimum 8 real conversations open with sponsor prospects</li>
                  </ul>
                </div>
                <div className="no-promise">
                  <h4>What's running in parallel</h4>
                  <p>Sponsor conversations advancing toward closing — some may close in Q3, most align to the Q4 fight window. Closing depends on each brand's internal cycle, not ours.</p>
                </div>
              </div>
            </div>

            <div className="quarter reveal">
              <div className="quarter-num">
                Q4 · 2026
                <span className="period">Oct – Dec</span>
              </div>
              <div className="quarter-content">
                <h3>Track A push. Q4 fight as anchor.</h3>
                <div className="deliverables">
                  <h4>Deliverables</h4>
                  <ul>
                    <li>Pxl8.io fan funding integration completed</li>
                    <li>Track A pitches actively running, synchronized to Chino's Q4 fight</li>
                    <li>Case studies in construction from Q3 activations</li>
                    <li>Minimum 12 cumulative conversations with sponsor prospects</li>
                    <li>Renewal and multi-event package negotiations opened for 2027</li>
                  </ul>
                </div>
                <div className="no-promise">
                  <h4>What's running in parallel</h4>
                  <p>First sponsors closing through the Q4 fight window. The Chino fight is the leverage that compresses negotiation timelines — not a guarantee of closing dates.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-label reveal">06 — Early Exit Protection</div>
          <h2 className="reveal">If SFH exits before month 12, the investment is prorated.</h2>

          <p className="reveal" style={{ maxWidth: '780px' }}>
            The $30K CRUDA invests becomes SFH property from day one and is recovered only through commission. If SFH terminates before month 12, the unrecovered portion is owed back — proportional to time elapsed and conditional on CRUDA having delivered against milestones.
          </p>

          <h4 className="reveal" style={{ marginTop: '48px' }}>How the Proration Works</h4>
          <div className="exit-table reveal">
            <div className="exit-row header">
              <div className="col">Exit Month</div>
              <div className="col">Condition</div>
              <div className="col" style={{ textAlign: 'right' }}>SFH Pays</div>
            </div>
            <div className="exit-row">
              <div className="when">Any month, KPIs met</div>
              <div className="what">CRUDA delivered milestones for the quarter in progress. Owed: $30,000 × (months remaining / 12).</div>
              <div className="pay">Full proration</div>
            </div>
            <div className="exit-row">
              <div className="when">Any month, KPIs partial</div>
              <div className="what">CRUDA delivered 60–80% of milestones. Owed: 50% of full proration.</div>
              <div className="pay">50%</div>
            </div>
            <div className="exit-row">
              <div className="when">Any month, KPIs not met</div>
              <div className="what">CRUDA delivered less than 60% of milestones. SFH exits with no payment.</div>
              <div className="pay">$0</div>
            </div>
          </div>

          <h4 className="reveal" style={{ marginTop: '48px' }}>What Counts as KPI Met</h4>
          <p className="reveal muted" style={{ maxWidth: '760px' }}>
            Auditable deliverables — what CRUDA controls — not sponsors closed, which depend on factors beyond either party.
          </p>
          <ul className="reveal kpi-list">
            <li>
              <span className="kpi-quarter">Q2 END</span>
              <span className="kpi-text">SFH website live · June 7 audit deck delivered · target list documented · outreach conversations opened</span>
            </li>
            <li>
              <span className="kpi-quarter">Q3 END</span>
              <span className="kpi-text">Athlete landing pages live · LinkedIn cadence active · audience database operational · Track A + B decks finalized · 8+ conversations open</span>
            </li>
            <li>
              <span className="kpi-quarter">Q4 END</span>
              <span className="kpi-text">Pxl8.io integrated · Track A pitches active · case studies in construction · 12+ cumulative conversations</span>
            </li>
          </ul>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-label reveal">07 — What We Need from SFH</div>
          <h2 className="reveal">For this to work, four conditions are non-negotiable.</h2>
          <p className="reveal muted" style={{ maxWidth: '760px' }}>
            Each is structural. The partnership cannot deliver without them.
          </p>

          <div className="needs-grid">
            <div className="need-card reveal">
              <div className="num">01</div>
              <div className="body">
                <h3>Agility & autonomy on commercial decisions</h3>
                <p>For sponsorship inventory, audits, sponsor negotiations, and brand activation — CRUDA operates with autonomy within agreed strategic ranges. Martin remains looped in throughout, but not as a gating step. Communication is constant; execution is autonomous.</p>
                <p style={{ marginTop: '12px' }}><strong>The principle:</strong> brands respect speed. Slow approval cycles kill deals before they form.</p>
              </div>
            </div>

            <div className="need-card reveal">
              <div className="num">02</div>
              <div className="body">
                <h3>Direct access to fighters for content production</h3>
                <p>Chino's brand is the lever. Ailín's becomes the second lever as we activate her. Martin's frames the operator credibility behind both. Structured access:</p>
                <ul>
                  <li>WhatsApp group with Chino + Fran + Pablo for fast-turnaround approvals</li>
                  <li>1:1 calls with Chino — twice per month — for ghostwriting and content strategy</li>
                  <li>Same structure for Martin — ongoing from June 1</li>
                  <li>Same structure for Ailín — activated in Q3</li>
                </ul>
              </div>
            </div>

            <div className="need-card reveal">
              <div className="num">03</div>
              <div className="body">
                <h3>One named decision-maker for fast approvals</h3>
                <p>Martin or designate, with authority to approve sponsor outreach lists, contract terms within agreed ranges, content publishing, and event activation. 24–48h turnaround on key approvals. Sponsor cycles do not wait.</p>
              </div>
            </div>

            <div className="need-card reveal">
              <div className="num">04</div>
              <div className="body">
                <h3>Full data access from day one</h3>
                <p>SFH shares existing analytics in the first two weeks: IG and TikTok insights, event attendance records, current sponsor relationships, event calendar for next 12 months, fighter roster details. Raw material for every sponsor conversation. Without it, the conversation is hypothetical.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-label reveal">08 — Where SFH Is Today</div>
          <h2 className="reveal">Before we propose, we need the floor.</h2>
          <p className="reveal muted" style={{ maxWidth: '780px' }}>
            The following information is required from SFH within the first two weeks. Foundation of every sponsor conversation. Placeholders below for SFH to confirm.
          </p>

          <div className="placeholder-block reveal" style={{ marginTop: '48px' }}>
            <h4>Event Calendar — Q3 & Q4 2026</h4>
            <div className="meta">SFH to confirm</div>
            <div className="placeholder-text">
              Confirmed dates and cities for all SFH events in Q3 and Q4 2026. Each event represents Track B inventory — packageable individually or bundled. Confirmed calendar lets us calibrate sponsor pitches against real timing.
            </div>
          </div>

          <div className="placeholder-block reveal">
            <h4>Existing Sponsors & Commitments</h4>
            <div className="meta">SFH to confirm</div>
            <div className="placeholder-text">
              Current sponsor relationships in place — including any informal partnerships, barter agreements, or recurring activations. Pre-existing relationships are respected and integrated into the strategy. We need to know what is committed before we can package what's available.
            </div>
          </div>

          <div className="placeholder-block reveal">
            <h4>Inbound Brand Conversations Already in Motion</h4>
            <div className="meta">SFH to confirm</div>
            <div className="placeholder-text">
              Any active conversations with brands that approached SFH directly — at any stage, even early. Under the exclusivity term, these flow to CRUDA for negotiation, but we need to know what's already on the table before we open new fronts.
            </div>
          </div>

          <div className="placeholder-block reveal">
            <h4>Fighter Roster & Promotional Commitments</h4>
            <div className="meta">SFH to confirm</div>
            <div className="placeholder-text">
              Active roster, contracted fighters, individual sponsor agreements at the athlete level (if any), and existing promotional commitments. This determines how the SFH brand integrates with athlete-level activation.
            </div>
          </div>

          <div className="placeholder-block reveal">
            <h4>Existing Digital Assets & Audience Data</h4>
            <div className="meta">SFH to confirm</div>
            <div className="placeholder-text">
              Access to existing analytics — Instagram insights, TikTok metrics, YouTube channel data, event attendance records, any captured fan data. The audience pack we sell to sponsors is built on top of this.
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-label reveal">09 — The Team</div>
          <h2 className="reveal"><em>SFH is the foundational partnership of CRUDA Sports.</em></h2>
          <p className="reveal" style={{ maxWidth: '780px' }}>
            Not one of two hundred clients receiving a templated approach. The relationship through which the model gets defined — with the attention, focus, and ownership that implies.
          </p>

          <div className="team-grid">
            <div className="team-card reveal">
              <div className="role-label">Co-Founder · Track A</div>
              <div className="name">Fran Herrera</div>
              <div className="role">Strategy + Brand Sponsor Origination</div>
              <p className="bio">
                Strategy, narrative architecture, content direction for the founders and athletes, and Track A brand sponsor outreach. Background spans ByteDance/TikTok, Nestlé, Mondelez, AB InBev, DeliveryHero, and the United Nations. Operates across three continents with direct relationships into the LATAM corporate sponsor ecosystem at the C-level.
              </p>
            </div>

            <div className="team-card reveal">
              <div className="role-label">Co-Founder · Track B</div>
              <div className="name">Pablo Cabona</div>
              <div className="role">Commercial Execution + On-Ground Activation</div>
              <p className="bio">
                Commercial execution, on-ground activation, and event-side sponsor relationships. Experience covers press, growth, and operational management of events at scale — including events of up to 15,000 people. Leads Track B outreach and partner management across Argentina and Uruguay. Present at every SFH event.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-label reveal">10 — Next Steps</div>
          <h2 className="reveal">If this is a yes, here is what happens next.</h2>

          <div className="steps">
            <div className="step reveal">
              <div className="step-num">
                STEP 01
                <span className="when">This week</span>
              </div>
              <div className="step-content">
                <h3>Verbal alignment + open questions</h3>
                <p>30-minute call between Martin and Fran (with Pablo, optionally) to confirm direction, surface concerns, and align on calendar for kickoff.</p>
              </div>
            </div>

            <div className="step reveal">
              <div className="step-num">
                STEP 02
                <span className="when">By May 13</span>
              </div>
              <div className="step-content">
                <h3>Partnership agreement signed</h3>
                <p>Short-form agreement covering: 25% commission on gross, exclusivity, $30K investment with prorated exit clause, IP ownership, running cost split, milestone-based KPIs. <strong>Hard deadline: May 13.</strong></p>
              </div>
            </div>

            <div className="step reveal">
              <div className="step-num">
                STEP 03
                <span className="when">May 13 – May 30</span>
              </div>
              <div className="step-content">
                <h3>CRUDA strategic offsite · Pre-kickoff prep</h3>
                <p>Fran on a previously committed strategic offsite. Pablo begins early scoping on Track B target list. SFH compiles the data requested in Section 08.</p>
              </div>
            </div>

            <div className="step reveal">
              <div className="step-num">
                STEP 04
                <span className="when">June 1</span>
              </div>
              <div className="step-content">
                <h3>Partnership begins — full kickoff</h3>
                <p>Working session with Martin, Fran, Pablo, and Chino. Phase 1 task assignment, content calendar setup, WhatsApp groups active, first content session with Chino scheduled. SFH website production starts.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="doc-footer">
        <div className="container">
          <div className="meta">CRUDA SPORTS — STRATEGIC PROPOSAL</div>
          <div className="meta" style={{ opacity: 0.4 }}>Prepared for Martin Pakciarz · May 2026 · Confidential</div>
        </div>
      </footer>

      <style jsx global>{`
        .proposal-wrapper {
          --bg: #fafaf7;
          --bg-elevated: #ffffff;
          --bg-card: #f4f2ec;
          --bg-deep: #0a0a0a;
          --ink: #0a0a0a;
          --ink-muted: #4a4744;
          --ink-dim: #8a8580;
          --accent: #d4242e;
          --accent-soft: #f5dcdd;
          --accent-dim: rgba(212, 36, 46, 0.08);
          --line: rgba(10, 10, 10, 0.10);
          --line-strong: rgba(10, 10, 10, 0.20);
          --serif: var(--font-fraunces), Georgia, serif;
          --sans: 'Inter Tight', -apple-system, sans-serif;
          --mono: var(--font-jetbrains), 'Courier New', monospace;
        }

        .proposal-wrapper {
          background: var(--bg);
          color: var(--ink);
          font-family: var(--sans);
          font-size: 16px;
          line-height: 1.6;
          -webkit-font-smoothing: antialiased;
          overflow-x: hidden;
          min-height: 100vh;
        }

        .proposal-wrapper ::selection { background: var(--accent); color: #fff; }

        .proposal-wrapper .container {
          max-width: 1020px;
          margin: 0 auto;
          padding: 0 48px;
        }

        .proposal-wrapper section {
          padding: 130px 0;
          border-bottom: 1px solid var(--line);
          position: relative;
        }

        .proposal-wrapper section:last-of-type { border-bottom: none; }

        .proposal-wrapper .doc-header {
          padding: 40px 0 28px;
          border-bottom: 1px solid var(--line);
        }

        .proposal-wrapper .doc-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-family: var(--mono);
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--ink-dim);
        }

        .proposal-wrapper .doc-meta .accent-dot {
          display: inline-block;
          width: 6px;
          height: 6px;
          background: var(--accent);
          border-radius: 50%;
          margin-right: 10px;
          vertical-align: middle;
        }

        .proposal-wrapper .section-label {
          font-family: var(--mono);
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: var(--accent);
          margin-bottom: 32px;
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .proposal-wrapper .section-label::before {
          content: '';
          width: 32px;
          height: 1px;
          background: var(--accent);
        }

        .proposal-wrapper h1 {
          font-family: var(--serif);
          font-size: clamp(52px, 7.5vw, 92px);
          font-weight: 400;
          line-height: 1.0;
          letter-spacing: -0.035em;
          margin-bottom: 32px;
        }

        .proposal-wrapper h1 em {
          font-style: italic;
          color: var(--accent);
          font-weight: 300;
        }

        .proposal-wrapper h2 {
          font-family: var(--serif);
          font-size: clamp(36px, 4.5vw, 56px);
          font-weight: 400;
          line-height: 1.08;
          letter-spacing: -0.025em;
          margin-bottom: 40px;
        }

        .proposal-wrapper h2 em {
          font-style: italic;
          color: var(--accent);
          font-weight: 300;
        }

        .proposal-wrapper h3 {
          font-family: var(--serif);
          font-size: 28px;
          font-weight: 500;
          line-height: 1.2;
          letter-spacing: -0.015em;
          margin-bottom: 16px;
        }

        .proposal-wrapper h4 {
          font-family: var(--sans);
          font-size: 13px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.14em;
          margin-bottom: 20px;
          color: var(--ink-muted);
        }

        .proposal-wrapper p {
          font-size: 18px;
          line-height: 1.65;
          margin-bottom: 24px;
          color: var(--ink);
        }

        .proposal-wrapper p.lead {
          font-size: 22px;
          line-height: 1.55;
          color: var(--ink);
        }

        .proposal-wrapper p.muted { color: var(--ink-muted); }

        .proposal-wrapper strong { font-weight: 600; color: var(--ink); }
        .proposal-wrapper em { font-style: italic; }

        .proposal-wrapper .hero {
          padding: 100px 0 140px;
          border-bottom: 1px solid var(--line);
        }

        .proposal-wrapper .hero-tag {
          font-family: var(--mono);
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.18em;
          color: var(--ink-muted);
          margin-bottom: 48px;
        }

        .proposal-wrapper .hero-tag .accent { color: var(--accent); }

        .proposal-wrapper .hero-meta {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 32px;
          margin-top: 80px;
          padding-top: 48px;
          border-top: 1px solid var(--line);
        }

        .proposal-wrapper .hero-meta-item { font-family: var(--mono); }

        .proposal-wrapper .hero-meta-item .label {
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--ink-dim);
          margin-bottom: 8px;
        }

        .proposal-wrapper .hero-meta-item .value {
          font-size: 14px;
          color: var(--ink);
        }

        .proposal-wrapper .hero-quote {
          margin: 48px 0 64px;
          padding: 32px 0 32px 32px;
          border-left: 3px solid var(--accent);
          max-width: 760px;
        }

        .proposal-wrapper .hero-quote p {
          font-family: var(--serif);
          font-size: clamp(24px, 3vw, 32px);
          font-style: italic;
          font-weight: 300;
          color: var(--ink);
          line-height: 1.35;
          letter-spacing: -0.015em;
          margin-bottom: 20px;
        }

        .proposal-wrapper .hero-quote .attr {
          font-family: var(--mono);
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.18em;
          color: var(--accent);
        }

        .proposal-wrapper .big-quote {
          background: var(--bg-deep);
          color: var(--bg);
          padding: 80px 64px;
          margin: 64px -32px;
          border-radius: 4px;
          position: relative;
        }

        .proposal-wrapper .big-quote::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 4px;
          height: 100%;
          background: var(--accent);
        }

        .proposal-wrapper .big-quote p {
          font-family: var(--serif);
          font-size: 30px;
          line-height: 1.3;
          color: var(--bg);
          margin-bottom: 0;
          font-style: italic;
          font-weight: 300;
          letter-spacing: -0.01em;
        }

        .proposal-wrapper .big-quote .attribution {
          margin-top: 32px;
          font-family: var(--mono);
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--accent);
          font-style: normal;
        }

        .proposal-wrapper .callout {
          background: var(--accent-dim);
          border-left: 3px solid var(--accent);
          padding: 32px 40px;
          margin: 48px 0;
        }

        .proposal-wrapper .callout p {
          font-family: var(--serif);
          font-size: 22px;
          font-style: italic;
          color: var(--ink);
          line-height: 1.5;
          margin: 0;
          font-weight: 400;
        }

        .proposal-wrapper .inventory-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1px;
          background: var(--line);
          border: 1px solid var(--line);
          margin: 48px 0;
        }

        .proposal-wrapper .inventory-cell {
          background: var(--bg-elevated);
          padding: 36px 32px;
        }

        .proposal-wrapper .inventory-cell .num {
          font-family: var(--serif);
          font-size: 56px;
          font-weight: 400;
          color: var(--accent);
          line-height: 1;
          margin-bottom: 8px;
          letter-spacing: -0.03em;
        }

        .proposal-wrapper .inventory-cell .label {
          font-family: var(--mono);
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--ink-muted);
          margin-bottom: 16px;
        }

        .proposal-wrapper .inventory-cell .desc {
          font-size: 15px;
          color: var(--ink);
          line-height: 1.5;
        }

        .proposal-wrapper .inventory-summary {
          background: var(--bg-deep);
          color: var(--bg);
          padding: 48px;
          margin-top: 32px;
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 48px;
          align-items: center;
        }

        .proposal-wrapper .inventory-summary .text {
          font-family: var(--serif);
          font-size: 24px;
          line-height: 1.4;
          color: var(--bg);
          font-weight: 300;
        }

        .proposal-wrapper .inventory-summary .number {
          font-family: var(--serif);
          font-size: 88px;
          font-weight: 400;
          color: var(--accent);
          line-height: 1;
          letter-spacing: -0.03em;
        }

        .proposal-wrapper .inventory-summary .number-sub {
          font-family: var(--mono);
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--bg);
          opacity: 0.7;
          margin-top: 4px;
        }

        .proposal-wrapper .scenarios-wrap {
          margin: 48px 0;
          border: 1px solid var(--line);
          background: var(--bg-elevated);
          overflow-x: auto;
        }

        .proposal-wrapper .scenarios-table {
          width: 100%;
          min-width: 720px;
          border-collapse: collapse;
        }

        .proposal-wrapper .scenarios-table thead th {
          background: var(--bg-card);
          padding: 24px 24px;
          text-align: left;
          border-bottom: 2px solid var(--line);
        }

        .proposal-wrapper .scenarios-table thead th.label {
          font-family: var(--mono);
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--ink-muted);
          font-weight: 600;
        }

        .proposal-wrapper .scenarios-table thead th.scenario {
          text-align: center;
        }

        .proposal-wrapper .scenarios-table thead th.scenario .name {
          font-family: var(--serif);
          font-size: 22px;
          font-weight: 400;
          color: var(--ink);
          letter-spacing: -0.01em;
          display: block;
          margin-bottom: 4px;
        }

        .proposal-wrapper .scenarios-table thead th.scenario .pen {
          font-family: var(--mono);
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--ink-dim);
          font-weight: 500;
        }

        .proposal-wrapper .scenarios-table thead th.scenario.base .name { color: var(--accent); }

        .proposal-wrapper .scenarios-table tbody td {
          padding: 18px 24px;
          border-bottom: 1px solid var(--line);
          font-size: 15px;
          color: var(--ink);
        }

        .proposal-wrapper .scenarios-table tbody td:first-child {
          font-weight: 500;
          color: var(--ink);
          background: var(--bg-card);
          font-size: 14px;
        }

        .proposal-wrapper .scenarios-table tbody td.value {
          font-family: var(--mono);
          text-align: center;
          font-size: 16px;
          font-weight: 500;
        }

        .proposal-wrapper .scenarios-table tbody td.value.base {
          background: var(--accent-soft);
          color: var(--accent);
          font-weight: 600;
        }

        .proposal-wrapper .scenarios-table tbody tr.total td {
          background: var(--bg-deep);
          color: var(--bg);
          font-weight: 600;
          font-size: 16px;
          padding: 22px 24px;
        }

        .proposal-wrapper .scenarios-table tbody tr.total td:first-child {
          background: var(--bg-deep);
          color: var(--bg);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          font-size: 12px;
        }

        .proposal-wrapper .scenarios-table tbody tr.total td.value {
          font-size: 22px;
          color: var(--accent);
          font-family: var(--mono);
        }

        .proposal-wrapper .scenarios-table tbody tr.commission td {
          background: var(--accent);
          color: #fff;
          font-weight: 600;
          padding: 24px;
        }

        .proposal-wrapper .scenarios-table tbody tr.commission td:first-child {
          background: var(--accent);
          color: #fff;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          font-size: 12px;
        }

        .proposal-wrapper .scenarios-table tbody tr.commission td.value {
          font-size: 22px;
          font-family: var(--mono);
        }

        .proposal-wrapper .quarters {
          margin-top: 48px;
        }

        .proposal-wrapper .quarter {
          display: grid;
          grid-template-columns: 180px 1fr;
          gap: 48px;
          padding: 48px 0;
          border-top: 1px solid var(--line);
        }

        .proposal-wrapper .quarter:last-child { border-bottom: 1px solid var(--line); }

        .proposal-wrapper .quarter-num {
          font-family: var(--mono);
          font-size: 11px;
          color: var(--accent);
          text-transform: uppercase;
          letter-spacing: 0.15em;
          padding-top: 8px;
        }

        .proposal-wrapper .quarter-num .period {
          font-family: var(--serif);
          font-size: 32px;
          color: var(--ink);
          display: block;
          margin-top: 8px;
          font-weight: 400;
          letter-spacing: -0.02em;
          text-transform: none;
        }

        .proposal-wrapper .quarter-content h3 {
          margin-bottom: 24px;
        }

        .proposal-wrapper .quarter-content .deliverables {
          margin-bottom: 24px;
        }

        .proposal-wrapper .quarter-content .deliverables h4 {
          color: var(--accent);
          font-size: 11px;
          margin-bottom: 12px;
        }

        .proposal-wrapper .quarter-content ul {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .proposal-wrapper .quarter-content ul li {
          padding-left: 24px;
          position: relative;
          margin-bottom: 10px;
          color: var(--ink);
          font-size: 15px;
          line-height: 1.55;
        }

        .proposal-wrapper .quarter-content ul li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: var(--accent);
          font-weight: 700;
          font-size: 14px;
          top: 1px;
        }

        .proposal-wrapper .quarter-content .no-promise {
          background: var(--bg-card);
          padding: 20px 24px;
          border-left: 2px solid var(--ink-dim);
          margin-top: 20px;
        }

        .proposal-wrapper .quarter-content .no-promise h4 {
          color: var(--ink-dim);
          font-size: 10px;
          margin-bottom: 10px;
        }

        .proposal-wrapper .quarter-content .no-promise p {
          margin: 0;
          font-size: 14px;
          color: var(--ink-muted);
          font-style: italic;
          line-height: 1.5;
        }

        .proposal-wrapper .investment-table {
          background: var(--bg-elevated);
          border: 1px solid var(--line);
          margin: 48px 0;
        }

        .proposal-wrapper .investment-row {
          display: grid;
          grid-template-columns: 1fr auto;
          padding: 22px 32px;
          border-bottom: 1px solid var(--line);
          align-items: center;
        }

        .proposal-wrapper .investment-row:last-child { border-bottom: none; }

        .proposal-wrapper .investment-row.total {
          background: var(--bg-deep);
          color: var(--bg);
          border-top: 2px solid var(--accent);
        }

        .proposal-wrapper .investment-row .item {
          font-size: 16px;
          color: var(--ink);
        }

        .proposal-wrapper .investment-row.total .item {
          color: var(--bg);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-size: 14px;
        }

        .proposal-wrapper .investment-row .item .sub {
          font-size: 13px;
          color: var(--ink-muted);
          margin-top: 4px;
        }

        .proposal-wrapper .investment-row.total .item .sub {
          color: rgba(255, 255, 255, 0.7);
          text-transform: none;
          letter-spacing: 0;
        }

        .proposal-wrapper .investment-row .amount {
          font-family: var(--mono);
          font-size: 18px;
          font-weight: 500;
          color: var(--ink);
          text-align: right;
        }

        .proposal-wrapper .investment-row.total .amount {
          color: var(--accent);
          font-size: 24px;
          font-weight: 600;
        }

        .proposal-wrapper .single-number {
          background: var(--bg-deep);
          color: var(--bg);
          padding: 80px 48px;
          margin: 48px 0;
          text-align: center;
          border-radius: 4px;
          position: relative;
          overflow: hidden;
        }

        .proposal-wrapper .single-number::before {
          content: '';
          position: absolute;
          top: 0;
          left: 50%;
          width: 1px;
          height: 32px;
          background: var(--accent);
        }

        .proposal-wrapper .single-number .pct {
          font-family: var(--serif);
          font-size: clamp(120px, 18vw, 200px);
          font-weight: 300;
          color: var(--accent);
          line-height: 1;
          letter-spacing: -0.05em;
          margin-bottom: 24px;
        }

        .proposal-wrapper .single-number .label {
          font-family: var(--mono);
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: var(--bg);
          margin-bottom: 16px;
        }

        .proposal-wrapper .single-number .desc {
          font-family: var(--serif);
          font-size: 22px;
          color: var(--bg);
          max-width: 580px;
          margin: 0 auto;
          line-height: 1.4;
          font-style: italic;
          font-weight: 300;
        }

        .proposal-wrapper .exit-table {
          margin: 32px 0;
          border: 1px solid var(--line);
        }

        .proposal-wrapper .exit-row {
          display: grid;
          grid-template-columns: 200px 1fr 160px;
          align-items: center;
          padding: 18px 24px;
          border-bottom: 1px solid var(--line);
          background: var(--bg-elevated);
        }

        .proposal-wrapper .exit-row:last-child { border-bottom: none; }

        .proposal-wrapper .exit-row.header {
          background: var(--bg-card);
          border-bottom: 2px solid var(--line);
        }

        .proposal-wrapper .exit-row.header .col {
          font-family: var(--mono);
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--ink-muted);
          font-weight: 600;
        }

        .proposal-wrapper .exit-row .when {
          font-family: var(--mono);
          font-size: 12px;
          color: var(--ink);
          font-weight: 500;
        }

        .proposal-wrapper .exit-row .what {
          font-size: 14px;
          color: var(--ink);
          line-height: 1.5;
          padding-right: 24px;
        }

        .proposal-wrapper .exit-row .pay {
          font-family: var(--mono);
          font-size: 16px;
          color: var(--accent);
          font-weight: 600;
          text-align: right;
        }

        .proposal-wrapper .terms-list {
          margin-top: 32px;
        }

        .proposal-wrapper .term-row {
          display: grid;
          grid-template-columns: 240px 1fr;
          gap: 32px;
          padding: 22px 0;
          border-top: 1px solid var(--line);
        }

        .proposal-wrapper .term-row:last-child { border-bottom: 1px solid var(--line); }

        .proposal-wrapper .term-row .term-label {
          font-family: var(--mono);
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--ink-muted);
          padding-top: 4px;
        }

        .proposal-wrapper .term-row .term-value {
          font-size: 16px;
          color: var(--ink);
          line-height: 1.55;
        }

        .proposal-wrapper .needs-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
          margin-top: 48px;
        }

        .proposal-wrapper .need-card {
          background: var(--bg-elevated);
          border: 1px solid var(--line);
          border-left: 4px solid var(--accent);
          padding: 36px 40px;
          display: grid;
          grid-template-columns: 80px 1fr;
          gap: 32px;
          align-items: start;
        }

        .proposal-wrapper .need-card .num {
          font-family: var(--serif);
          font-size: 56px;
          color: var(--accent);
          line-height: 1;
          font-weight: 400;
          letter-spacing: -0.03em;
        }

        .proposal-wrapper .need-card .body h3 {
          font-size: 24px;
          margin-bottom: 12px;
        }

        .proposal-wrapper .need-card .body p {
          font-size: 15px;
          margin-bottom: 0;
          color: var(--ink-muted);
          line-height: 1.55;
        }

        .proposal-wrapper .need-card .body ul {
          margin-top: 12px;
          list-style: none;
          padding: 0;
        }

        .proposal-wrapper .need-card .body ul li {
          padding-left: 18px;
          position: relative;
          margin-bottom: 6px;
          font-size: 14px;
          color: var(--ink-muted);
          line-height: 1.5;
        }

        .proposal-wrapper .need-card .body ul li::before {
          content: '—';
          position: absolute;
          left: 0;
          color: var(--accent);
        }

        .proposal-wrapper .placeholder-block {
          background: var(--bg-elevated);
          border: 1px dashed var(--line-strong);
          padding: 36px 40px;
          margin-bottom: 24px;
        }

        .proposal-wrapper .placeholder-block h4 {
          color: var(--accent);
          margin-bottom: 12px;
        }

        .proposal-wrapper .placeholder-block .meta {
          font-family: var(--mono);
          font-size: 11px;
          color: var(--ink-dim);
          margin-bottom: 16px;
          text-transform: uppercase;
          letter-spacing: 0.12em;
        }

        .proposal-wrapper .placeholder-block .placeholder-text {
          font-style: italic;
          color: var(--ink-muted);
          font-size: 15px;
          line-height: 1.55;
          border-left: 2px solid var(--line);
          padding-left: 16px;
        }

        .proposal-wrapper .team-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          margin-top: 48px;
        }

        .proposal-wrapper .team-card {
          background: var(--bg-elevated);
          border: 1px solid var(--line);
          border-top: 3px solid var(--accent);
          padding: 36px 32px;
        }

        .proposal-wrapper .team-card .role-label {
          font-family: var(--mono);
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--accent);
          margin-bottom: 16px;
        }

        .proposal-wrapper .team-card .name {
          font-family: var(--serif);
          font-size: 30px;
          font-weight: 500;
          margin-bottom: 8px;
          letter-spacing: -0.015em;
        }

        .proposal-wrapper .team-card .role {
          font-family: var(--mono);
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--ink-muted);
          margin-bottom: 20px;
        }

        .proposal-wrapper .team-card .bio {
          font-size: 14px;
          line-height: 1.6;
          color: var(--ink-muted);
          margin: 0;
        }

        .proposal-wrapper .steps {
          margin-top: 48px;
        }

        .proposal-wrapper .step {
          display: grid;
          grid-template-columns: 200px 1fr;
          gap: 48px;
          padding: 32px 0;
          border-top: 1px solid var(--line);
          align-items: start;
        }

        .proposal-wrapper .step:last-child { border-bottom: 1px solid var(--line); }

        .proposal-wrapper .step .step-num {
          font-family: var(--mono);
          font-size: 11px;
          color: var(--accent);
          text-transform: uppercase;
          letter-spacing: 0.15em;
        }

        .proposal-wrapper .step .step-num .when {
          display: block;
          color: var(--ink);
          margin-top: 8px;
          font-size: 13px;
          font-weight: 500;
        }

        .proposal-wrapper .step .step-content h3 {
          font-size: 22px;
          margin-bottom: 8px;
        }

        .proposal-wrapper .step .step-content p {
          color: var(--ink-muted);
          font-size: 15px;
          margin: 0;
          line-height: 1.55;
        }

        .proposal-wrapper .doc-footer {
          padding: 80px 0 60px;
          text-align: center;
          border-top: 1px solid var(--line);
          background: var(--bg-deep);
          color: var(--bg);
          margin-top: 0;
        }

        .proposal-wrapper .doc-footer .signature {
          font-family: var(--serif);
          font-size: 36px;
          font-style: italic;
          color: var(--accent);
          margin-bottom: 24px;
          font-weight: 300;
          letter-spacing: -0.015em;
        }

        .proposal-wrapper .doc-footer .meta {
          font-family: var(--mono);
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.18em;
          color: var(--bg);
          opacity: 0.6;
          margin-bottom: 8px;
        }

        .proposal-wrapper .kpi-list {
          list-style: none;
          padding: 0;
          margin: 24px 0;
        }

        .proposal-wrapper .kpi-list li {
          padding: 14px 0;
          border-bottom: 1px solid var(--line);
          display: flex;
          gap: 32px;
        }

        .proposal-wrapper .kpi-list li:last-child {
          border-bottom: none;
        }

        .proposal-wrapper .kpi-quarter {
          font-family: var(--mono);
          font-size: 12px;
          color: var(--accent);
          min-width: 80px;
          padding-top: 2px;
          letter-spacing: 0.1em;
        }

        .proposal-wrapper .kpi-text {
          font-size: 15px;
          color: var(--ink);
          line-height: 1.55;
        }

        @media (max-width: 768px) {
          .proposal-wrapper .container { padding: 0 24px; }
          .proposal-wrapper section { padding: 80px 0; }
          .proposal-wrapper .hero { padding: 60px 0 80px; }
          .proposal-wrapper .hero-meta { grid-template-columns: 1fr 1fr; gap: 24px; }
          .proposal-wrapper .inventory-grid { grid-template-columns: 1fr; }
          .proposal-wrapper .inventory-summary { grid-template-columns: 1fr; gap: 24px; text-align: center; }
          .proposal-wrapper .quarter { grid-template-columns: 1fr; gap: 16px; }
          .proposal-wrapper .step { grid-template-columns: 1fr; gap: 16px; }
          .proposal-wrapper .term-row { grid-template-columns: 1fr; gap: 8px; }
          .proposal-wrapper .investment-row { padding: 18px 20px; }
          .proposal-wrapper .need-card { grid-template-columns: 1fr; gap: 16px; }
          .proposal-wrapper .team-grid { grid-template-columns: 1fr; }
          .proposal-wrapper .exit-row { grid-template-columns: 1fr; gap: 8px; }
          .proposal-wrapper .exit-row .pay { text-align: left; }
          .proposal-wrapper .big-quote { padding: 48px 32px; margin: 32px -16px; }
          .proposal-wrapper .big-quote p { font-size: 22px; }
          .proposal-wrapper .single-number { padding: 48px 24px; }
        }

        .proposal-wrapper .reveal {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .proposal-wrapper .reveal.in {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
}
