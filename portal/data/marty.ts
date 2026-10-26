/* eslint-disable */
// @ts-nocheck
// Marty Lowe — her own workspace. Separate client, her own pace: no dates, no deadlines.
export const marty = {
  slug: "marty",
  name: "Marty Lowe",
  clients: ["Marty"],
  // Bump these in the same commit as any content change below.
  updatedAt: "2026-10-26T11:45:00-04:00",
  updatedBy: "Fran",
  objective: "Your story, written down for the first time. Then your site, your blog and your LinkedIn, at your pace.",
  noDates: true,
  channels: {
    Story: { label: "Your story", blurb: "The foundation for everything else. A first sketch of your story and a timeline with the gaps only you can fill." },
    Website: { label: "Your site", blurb: "A refreshed martylowe.com: your work first, yachts and residential, in the order you decide." },
    LinkedIn: { label: "LinkedIn", blurb: "Your profile first, then twelve posts drawn from the articles. Nothing goes out before the articles exist." },
  },
  scope: {
    title: "Included in M2Develop’s build",
    lines: [
      { name: "Your story", done: 0, total: 1, note: "First sketch ready for you to read.", onClient: true },
      { name: "Site refresh", done: 0, total: 1, note: "Starts once the domain is recovered.", onClient: true },
      { name: "Blog: eight articles", done: 0, total: 8, note: "Angles proposed to you, chosen by you." },
      { name: "LinkedIn setup", done: 0, total: 1, note: "We build the profile with you on a call.", onClient: true },
    ],
  },
  results: [],
  items: [
    { id: "m-bio", channel: "Story", kind: "Document", title: "Somebody Has to Start", owner: "Marty", status: "Needs approval", version: 1,
      why: "Your story in ten short chapters, from Bertram in 1980 to the studio today. Read it, change anything, and nothing is published without your yes.",
      excerpt: "A first sketch of the story, in the third person, with a timeline at the end showing the dates we still need from you.",
      assets: [{ label: "Read the draft", href: "#" }, { label: "Timeline", href: "#" }] },
    { id: "m-dates", channel: "Story", kind: "Input", title: "Dates for the timeline", owner: "Marty", status: "Needs input", version: 1,
      why: "Your years at Bertram, the Azimut period, when Sanlorenzo began. Whatever you remember, roughly is fine.",
      askHow: "Reply to Fran with what you have, or we go through it together on our next call." },
    { id: "m-domain", channel: "Website", kind: "Input", title: "Access to martylowe.com", owner: "Marty", status: "Needs input", version: 1,
      why: "The domain sits in a GoDaddy account set up years ago. We need it to refresh the site, or we start on a new address.",
      askHow: "Check your inbox at martyloweinc@gmail.com for the GoDaddy code, or tell Fran who set up the site." },
    { id: "m-site-home", channel: "Website", kind: "Web page", title: "New site: home", owner: "Fran", status: "Drafting", version: 1,
      why: "Your work first. Whether yachts and residential sit side by side is yours to decide." },
    { id: "m-li", channel: "LinkedIn", kind: "Input", title: "Your LinkedIn login, on a call", owner: "Marty", status: "Needs input", version: 1,
      why: "We set up the profile with you on a short call, so it sounds like you from the first line.",
      askHow: "Pick a time with Fran. Ten minutes is enough." },
    { id: "m-li-posts", channel: "LinkedIn", kind: "LinkedIn posts", title: "Twelve posts from the articles", owner: "Fran", status: "Drafting", version: 1,
      why: "They come after the articles, so every post has something real behind it." },
  ],
};
