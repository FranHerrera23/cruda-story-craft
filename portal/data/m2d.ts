/* eslint-disable */
// @ts-nocheck
// M2Develop review library. Draft copy and Drive IDs stay in deployment configuration.
const STRATEGY_PDF = "https://drive.google.com/file/d/1tJDbxw2zzMUZQbjRkDLvYfeQRzCQNG_V/view";
const IG_FOLDER = "https://drive.google.com/drive/folders/1kBa9RjNErZB7mWZ-UmRA_fuR9HOWWXtJ";
const CAPTIONS = "https://drive.google.com/file/d/1hXUErB_aQeGCZV9tP0EDf8k_0-MUGVYs/view";
const HULL_DOC = "https://docs.google.com/document/d/1xCqW1jSI1VBKX9ShYGUJIXKf0kfjCc6E2x-WvC6KOS8/edit";
const CAROUSELS = "https://drive.google.com/drive/u/0/folders/11DVJ8tmZWNaZ_LM97w65k0hUi-7xFtJU";
const RYAN_LI = "https://www.linkedin.com/in/ryanaltman/recent-activity/all/";

const ARTICLE_DRAFTS = [
  ["B01", "Can you change the interior of a yacht before making it yours?"],
  ["B02", "Choosing between yacht styling, an interior refresh, and a refit"],
  ["B03", "When to involve an interior designer in a new yacht build"],
  ["B04", "What belongs in a yacht interior design budget"],
  ["B05", "How to choose a yacht interior designer for the work you need"],
  ["B06", "How a yacht interior partner can support a broker beyond the sale"],
  ["B07", "What yacht interior procurement involves after a selection is approved"],
  ["B08", "Planning a yacht interior project with the captain"],
  ["M01", "How to compare yacht interiors after a boat show"],
  ["M02", "Preparing a yacht interior for a private viewing or event"],
  ["M03", "How to brief a yacht interior designer around the way you live"],
  ["M04", "What a yacht interior rendering can tell you before work begins"],
] as const;

function articleReviewItems() {
  let driveIds: Record<string, unknown>;
  try {
    driveIds = JSON.parse(process.env.M2D_ARTICLE_REVIEW_DRIVE_IDS || "{}");
  } catch {
    return [];
  }
  return ARTICLE_DRAFTS.flatMap(([code, title]) => {
    const driveId = driveIds?.[code];
    if (typeof driveId !== "string" || !/^[\w-]{20,}$/.test(driveId)) return [];
    const series = code.startsWith("B") ? "Build" : "Monthly · Oct 20 to Nov 20";
    return [{
      id: code === "B06" ? "brokers" : `article-${code.toLowerCase()}`,
      channel: "Website",
      kind: "Article",
      series,
      title,
      owner: "Ryan",
      status: "Needs approval",
      version: 1,
      excerpt: "Open the Word draft to read the full article. Approve the draft or request changes here.",
      why: "First editorial draft for your review.",
      assets: [{ label: "Read the Word draft", href: `https://drive.google.com/file/d/${driveId}/view` }],
    }];
  });
}

function reviewLibrary() {
  try {
    const library = JSON.parse(process.env.M2D_REVIEW_LIBRARY || "{}");
    if (!Array.isArray(library.articles) || library.articles.length !== 12 || !Array.isArray(library.carousels) || library.carousels.length !== 14) return null;
    if (!library.articles.every((a: any) => /^[BM]0[1-8]$/.test(a.code) && /^[\w-]{20,}$/.test(a.articleDriveId) && typeof a.linkedin === "string" && typeof a.x === "string")) return null;
    if (!library.carousels.every((a: any) => /^[\w-]{20,}$/.test(a.driveId))) return null;
    return library;
  } catch { return null; }
}
const library = reviewLibrary();
const articleReviews = library ? library.articles.map((a: any) => ({
  id: `article-${a.code.toLowerCase()}-v${a.articleVersion || 2}`,
  historyItemIds: a.articleVersion > 2 ? [`article-${a.code.toLowerCase()}-v2`] : [],
  historyItemId: a.code === "B06" ? "brokers" : `article-${a.code.toLowerCase()}`,
  channel: "Website", kind: "Article", story: a.code, title: a.title,
  series: a.code.startsWith("B") ? "Build · revised manuscript" : "Monthly · Oct 20 to Nov 20 · revised manuscript",
  owner: "Ryan", status: "Needs approval", version: a.articleVersion || 2,
  excerpt: a.subtitle || "Read the revised manuscript below, then approve this article or request changes. Each article has its own decision.",
  why: "This is the rewritten version. Earlier decisions remain in the history and do not approve this manuscript.",
  assets: [{ label: "Read article", href: `https://drive.google.com/file/d/${a.articleDriveId}/view` }],
})) : articleReviewItems();
const socialReviews = library ? library.articles.map((a: any) => ({
  id: `social-${a.code.toLowerCase()}-v${a.socialVersion || 1}`, historyItemIds: a.socialVersion > 1 ? [`social-${a.code.toLowerCase()}-v1`] : [], channel: "LinkedIn", kind: "LinkedIn + X", story: a.code,
  title: a.title, owner: "Ryan", status: "Needs approval", version: a.socialVersion || 1,
  post: a.linkedin, xPost: a.x,
  why: "Review both versions here. Approval covers the LinkedIn post and its X version. We publish two per week, after the accompanying article is approved and live, with a cleared project photograph and the public article link.",
  assets: [{ label: "Read accompanying article", href: `https://drive.google.com/file/d/${a.articleDriveId}/view` },
    ...(a.linkedinUrl ? [{ label: "Read revised LinkedIn", href: a.linkedinUrl }, { label: "Read revised X", href: a.xUrl }] : a.socialDriveId ? [{ label: "Open LinkedIn + X document", href: `https://drive.google.com/file/d/${a.socialDriveId}/view` }] : [])],
})) : [];
const carouselReviews = library ? library.carousels.map((a: any) => ({
  id: a.version > 1 ? `${a.id}-v${a.version}` : a.id, historyItemIds: a.version > 1 ? [a.id] : [], title: a.title, channel: "Instagram", kind: "Carousel", owner: "Ryan", status: "Needs approval", version: a.version || 1,
  caption: a.caption,
  reviewNote: a.reviewNote,
  excerpt: "Open this carousel to review its slides and caption. Approve this carousel or request changes here.",
  why: "Your decision applies to this carousel only. Publication order is set after approval.",
  assets: [
    ...(a.pdfUrl ? [{ label: "Review carousel PDF", href: a.pdfUrl }] : []),
    { label: "Open slides and caption", href: `https://drive.google.com/drive/folders/${a.driveId}` },
    ...(a.previousDriveId ? [{ label: "Previous version", href: `https://drive.google.com/drive/folders/${a.previousDriveId}` }] : []),
  ],
})) : [];


export const m2d = {
  slug: "m2d",
  name: "M2Develop",
  clients: ["Ryan"],
  // Bump these in the same commit as any content change below.
  updatedAt: "2026-11-23T19:00:00Z",
  updatedBy: "Fran",
  objective: "Build trust with owners, brokers and captains through useful stories and a consistent publishing rhythm.",
  phase: "Articles and social content ready for individual review.",
  reviewHub: true,
  channels: {
    Instagram: { blurb: "Seven carousels rebuilt from your revisions, plus seven earlier drafts awaiting your feedback. All use real photography. Season 1 of The Sanctuary Series, six reels, stays on hold until you decide about the AI content label.", links: [{ label: "Instagram strategy", href: STRATEGY_PDF }] },
    LinkedIn: { label: "LinkedIn / X", blurb: "Twelve article-led pairs. Read the LinkedIn post and its X version together, then approve each pair. Two per week after the article is live." },
    X: { label: "Earlier X posts", blurb: "Earlier X posts and feedback. New X versions are paired with their LinkedIn posts in LinkedIn / X." },
    "Hull Notes": { blurb: "Your newsletter, sent from Beehiiv to your list. The show issue goes out the Friday of show week." },
    Website: { label: "Articles", blurb: articleReviews.length ? "Read each current article, then approve it or request changes here." : "Articles on m2develop.com/stories and the case studies." },
  },
  scope: {
    title: "Build, agreed 31 August",
    lines: [
      { name: "Website", done: 1, total: 1, note: "Live at m2develop.com. Contact and Studio are done. Nothing outstanding." },
      { name: "Articles", done: 4, total: 12, note: "Four published. The remaining Build drafts are in Site & articles for review." },
      { name: "LinkedIn posts", done: 5, total: 12, note: "Five previously recorded as live. Twelve new LinkedIn and X pairs are ready for review." },
      { name: "Instagram", done: 0, total: 14, note: "Fourteen carousels with individual links and approval buttons. The six reels stay on hold.", onClient: true },
      { name: "Case studies", done: 0, total: 5, note: "One 45 minute call per project. You talk, we write.", onClient: true },
      { name: "Marty Lowe: site, blog, LinkedIn", done: 0, total: 3, note: "In her own space, at her pace." },
      { name: "CRM in Attio", done: 1, total: 1, note: "Live. Your contact list is the next step.", onClient: true },
    ],
  },
  results: [
    { value: "1 November", label: "First monthly read: comments, saves and conversations started." },
    { value: "Hull Notes", label: "Subscribers and opens, read from the first issue onward." },
  ],
  items: [
    ...socialReviews,
    ...carouselReviews,
    { id: "car-all", channel: "Instagram", kind: "Carousels", forWho: "For owners and brokers", title: "Earlier carousel folder and feedback", owner: "Fran", status: library ? "On hold" : "Needs approval", version: 1,
      why: "Fourteen pieces, nine slides each, built from M2D’s own photography. Real photographs, no animation, and no AI content label on any of them. Open the folder, go through them, and tell me which ones go out and in what order.",
      assets: [{ label: "Open the folder", href: CAROUSELS }], eden: "Not scheduled yet" },
    // ── Instagram · week of 26 October (show week)
    { id: "s1-01", channel: "Instagram", kind: "Reel", series: "The Sanctuary · 01", forWho: "For the early couple", time: "7:00", title: "The first coffee", owner: "Fran", status: "On hold", version: 1,
      scene: "The owner’s cabin in the morning. Steam rises from two cups while the light moves across the bed.",
      caption: "You can wake up in a different port every morning and still be in your own room.\n\nThat’s the promise of a yacht. The cabin should keep it.",
      why: "Opens the season and the week of the show: the cabin as the room that stays yours wherever the boat is.",
      assets: [{ label: "Reel files", href: IG_FOLDER }, { label: "Caption", href: CAPTIONS }], eden: "Not in Eden yet" },
    { id: "s1-02", channel: "Instagram", kind: "Reel", series: "The Sanctuary · 02", forWho: "For the founder", time: "9:30", title: "The table that became a desk", owner: "Fran", status: "On hold", version: 1,
      scene: "The dining room with the marina outside: a laptop open, an espresso, a notebook. The phone face down vibrates once.",
      caption: "The formal dining table on most boats I design ends up as a desk, with a laptop on it for half the day.\n\nThe interior should be ready for that before anyone asks.",
      why: "Goes out the day the show opens. The fastest-growing buyer in the American market, in one scene.",
      assets: [{ label: "Reel files", href: IG_FOLDER }, { label: "Caption", href: CAPTIONS }], eden: "Not in Eden yet" },
    { id: "s1-03", channel: "Instagram", kind: "Reel", series: "The Sanctuary · 03", forWho: "For the family", time: "12:30", title: "The long lunch", owner: "Fran", status: "On hold", version: 1,
      scene: "The aft deck set for eight, a game of dominoes in progress, a child’s straw hat on the sofa. A boat passes on the waterway.",
      caption: "In these waters the aft deck isn’t a transition. It’s where the day is spent.\n\nSome families want the table set for twelve and the crew close by. That’s not a style. It’s how they live.",
      why: "The Latin American owner, three generations at one table. The brief you only get by asking.",
      assets: [{ label: "Reel files", href: IG_FOLDER }, { label: "Caption", href: CAPTIONS }], eden: "Not in Eden yet" },
    // ── Instagram · week of 2 November
    { id: "s1-04", channel: "Instagram", kind: "Reel", series: "The Sanctuary · 04", forWho: "For the collector", time: "15:00", title: "The piece with a story", owner: "Fran", status: "On hold", version: 1,
      scene: "The main salon in the afternoon: an architecture monograph open on the table, reading glasses, a carved piece from a trip.",
      caption: "Almost every owner brings aboard a piece with a story. Where it goes decides how the whole boat should work.\n\nIf you had a yacht, what’s the first thing you’d bring aboard?",
      why: "The owner who wants the boat to say who he is, and the broker who sells to him.",
      assets: [{ label: "Reel files", href: IG_FOLDER }, { label: "Caption", href: CAPTIONS }], eden: "Not in Eden yet" },
    { id: "s1-05", channel: "Instagram", kind: "Reel", series: "The Sanctuary · 05", forWho: "For the hosts", time: "19:30", title: "Dinner moves up", owner: "Fran", status: "On hold", version: 1,
      scene: "The flybridge at sunset: two glasses of wine, candles in lanterns, a cashmere throw. The sea catches the last light.",
      caption: "Dinners move up to the flybridge, where the breeze and the view are.",
      why: "The scene the social owner pictured when he decided to buy.",
      assets: [{ label: "Reel files", href: IG_FOLDER }, { label: "Caption", href: CAPTIONS }], eden: "Not in Eden yet" },
    { id: "s1-06", channel: "Instagram", kind: "Reel", series: "The Sanctuary · 06", forWho: "For the strategist", time: "23:00", title: "The last light", owner: "Fran", status: "On hold", version: 1,
      scene: "The upper deck bar at night: a chess game mid-play, two whiskies on the counter. The ice turns in the glass.",
      caption: "Admired from the dock. Lived in at sea.\n\nEvery yacht should feel like both a sanctuary and a stage.",
      why: "Closes the season, and the day aboard.",
      assets: [{ label: "Reel files", href: IG_FOLDER }, { label: "Caption", href: CAPTIONS }], eden: "Not in Eden yet" },

    // ── LinkedIn

    { id: "li-hull", channel: "LinkedIn", kind: "LinkedIn post", title: "Walk a dock today and you can tell", date: "2026-10-28", at: "7:30 am", owner: "Ryan", status: "Needs approval", version: 2, story: "two-oceans",
      why: "Day one of the show, in your own words. Every line but the opening and the close is text you already approved and that is live on the site, so it needs nothing from you except a yes.",
      assets: [{ label: "The article", href: "https://www.m2develop.com/stories/one-yacht-two-oceans/" }], eden: "Draft in Eden, not scheduled yet",
      post: "Walk a dock at Fort Lauderdale today and you can tell.\n\nTwo hulls of the same model, six months apart, and the second one feels like a different boat. That is not an accident, and it is not a compromise. It is a design decision, made on purpose.\n\nA yacht is designed for a place and a way of living before it is designed for a floor plan. The first hull of a model is usually conceived in the Mediterranean. The next one crosses to the Caribbean and the coasts of the Americas, where the days are longer, the sun sits differently, and life unfolds in its own rhythm on the water.\n\nOwners rarely name it. They say the second one feels bigger, or calmer, or simply more like theirs.\n\nThe show runs through Sunday. Walk a few and you will see it.\n\nm2develop.com/stories/one-yacht-two-oceans" },
    { id: "show-floor", channel: "LinkedIn", kind: "Input", title: "From the show floor: what you’re seeing", date: "2026-10-28", at: "Wed to Sun", owner: "Ryan", status: "Needs input", version: 1,
      why: "Show week is the one week nothing can be written ahead. Short posts from the floor, written while it is happening, for LinkedIn and X, twice each across the show.",
      askHow: "While you are on the floor, take photos and the odd selfie. Whatever you catch, send it over and we write it the same night and bring it back here for your approval." },
    { id: "li-marty-flibs", channel: "LinkedIn", kind: "LinkedIn post", title: "Marty, Bertram and the Americas edition", date: "2026-10-21", owner: null, status: "Live", version: 1, assets: [{ label: "On LinkedIn", href: RYAN_LI }], result: "Read at month end" },
    { id: "li-collab", channel: "LinkedIn", kind: "LinkedIn post", title: "Two studios, working together", date: "2026-10-20", owner: null, status: "Live", version: 1, assets: [{ label: "On LinkedIn", href: RYAN_LI }], result: "Read at month end" },
    { id: "li-riva", channel: "LinkedIn", kind: "LinkedIn post", title: "Riva", owner: null, status: "Live", version: 1, assets: [{ label: "On LinkedIn", href: RYAN_LI }] },
    { id: "li-craft", channel: "LinkedIn", kind: "LinkedIn post", title: "The craft", owner: null, status: "Live", version: 1, assets: [{ label: "On LinkedIn", href: RYAN_LI }] },
    { id: "li-intro", channel: "LinkedIn", kind: "LinkedIn post", title: "Introduction", date: "2026-10-01", owner: null, status: "Live", version: 1, assets: [{ label: "On LinkedIn", href: RYAN_LI }], result: "Read at month end" },

    // ── X
    { id: "x-hull", channel: "X", kind: "X thread", title: "Walk a dock today and you can tell", date: "2026-10-28", at: "12:00 pm", owner: "Ryan", status: "Needs approval", version: 2, story: "two-oceans",
      why: "The same opening for X, with the article at the end.", assets: [{ label: "The article", href: "https://www.m2develop.com/stories/one-yacht-two-oceans/" }], eden: "Not in Eden yet. The X account connected in Eden is Fran’s, not Ryan’s.",
      post: "Walk a dock at Fort Lauderdale today and you can tell.\n\nTwo hulls of the same model, six months apart, and the second one feels like a different boat. That is not an accident, and it is not a compromise. It is a design decision, made on purpose.\n\nm2develop.com/stories/one-yacht-two-oceans" },
    { id: "hn-2", channel: "Hull Notes", kind: "Newsletter", title: "Hull Notes, issue 2: the show issue", date: "2026-10-30", at: "7:30 am", owner: "Fran", status: "Drafting", version: 1,
      why: "What to look at inside a boat in eleven minutes, sent from you to your list the Friday of show week." },

    // ── Website
    { id: "guide", channel: "Website", kind: "Input", title: "Seven answers for the boat show guide", owner: "Ryan", status: "Needs input", version: 1,
      why: "The one article only you can write: what should you look for in a yacht interior at the Fort Lauderdale boat show? Open since 13 October.",
      ask: ["When you staged a boat for a show, what did you bring aboard that doesn’t come with the boat?", "What’s the first thing you look at when you step onto a boat at a show?", "What should a buyer ask about the interior that almost nobody asks?", "What’s the difference between the boat dressed for the show and the one that gets delivered?", "Which details tell you a boat was designed for this market?", "What do people fall in love with at a show that they’d struggle to live with?", "What can be changed after you buy, and what can’t?"],
      askHow: "A reply by email or a ten-minute voice note is enough. Send it to fran@thecruda.com." },
    { id: "cases", channel: "Website", kind: "Input", title: "Five case studies: one 45 minute call per project", owner: "Ryan", status: "Needs input", version: 1,
      why: "The case studies and the next articles come from these conversations. You talk, we write. Open since 13 October.", askHow: "Reply to Fran with five times that work for you, one per project." },
    ...articleReviews,
    { id: "a-two-oceans", channel: "Website", kind: "Article", title: "One yacht, two oceans", date: "2026-10-19", owner: null, status: "Live", version: 1, story: "two-oceans", assets: [{ label: "Read the article", href: "https://www.m2develop.com/stories/one-yacht-two-oceans/" }], result: "Read at month end" },
    { id: "a-own", channel: "Website", kind: "Article", title: "How do you make a luxury yacht feel like your own?", date: "2026-10-12", owner: null, status: "Live", version: 1, assets: [{ label: "Read the article", href: "https://www.m2develop.com/stories/make-a-yacht-feel-like-your-own/" }] },
    { id: "a-studios", channel: "Website", kind: "Article", title: "Two Studios, One Vision", date: "2026-10-09", owner: null, status: "Live", version: 1, assets: [{ label: "Read the article", href: "https://www.m2develop.com/stories/two-studios-one-vision/" }] },
    { id: "a-letter", channel: "Website", kind: "Article", title: "Are you building this to be looked at, or to be lived in?", date: "2026-10-07", owner: null, status: "Live", version: 1, assets: [{ label: "Read the article", href: "https://www.m2develop.com/stories/founder-letter/" }] },

  ],
};
