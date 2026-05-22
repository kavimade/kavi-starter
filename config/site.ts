export const siteConfig = {
  ownerName: "Luke Ketterhagen",

  // Used to namespace localStorage keys — unique per client, no spaces
  slug: "lk",

  freebie: {
    // Set to false to disable the toast site-wide
    enabled: true,

    heading:     "Get the FREE guided relaxation practice",
    subheading:  "We all need relaxation. Get yours now.",
    pillText:    "Get my free relaxation",
    successMsg:  "Check your inbox — it's on its way.",
    photo:       "/luke-ketterhagen-about-photo.webp",
    photoAlt:    "Luke Ketterhagen",

    // Mailchimp tag applied to subscribers from this form
    mailchimpTag: "relaxation-download",

    // How long (days) before the toast reappears after a user dismisses it
    suppressDays: 30,

    // What % of the page scrolled before the toast appears (0–1)
    scrollThreshold: 0.5,
  },
}
