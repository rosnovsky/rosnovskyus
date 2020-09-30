module.exports = {
  siteUrl: "https://rosnovsky.us",
  postsPerPage: 12,
  siteTitleMeta: "Rosnovsky Park™",
  siteDescriptionMeta:
    "Rosnovsky.us: From Pacific Northwest to the World",
  shareImageWidth: 1000,
  shareImageHeight: 523,
  shortTitle: "From Pacific Northwest to the World",
  siteIcon: "favicon.png",
  backgroundColor: "#e9e9e9",
  themeColor: "#15171A",
  apiUrl: "https://rosnovsky.us",

  header: {
    navigation: [
      {
        label: "Home",
        url: "/",
      },
      // {
      //   label: "Contact",
      //   url: "https://ghost-novela-preview.draftbox.co/contact",
      // },
    ],
  },
  footer: {
    copyright: "© 2013-2020 Art Rosnovsky",
    navigation: [
      {
        label: "Home",
        url: "https://rosnovsky.us",
      },
      {
        label: "Sitemap",
        url: "https://rosnovsky.us/sitemap.xml",
      },
      {
        label: "RSS",
        url: "https://rosnovsky.us/rss.xml",
      },
      // {
      //   label: "Contact",
      //   url: "https://ghost-novela-preview.draftbox.co/contact",
      // },
      // {
      //   label: "External Link",
      //   url: "https://spectrum.chat/gatsby-js/themes?tab=posts",
      // },
    ],
  },
  subscribeWidget: {
    visible: true,
    title: "Subscribe to Rosnovsky Park™",
    helpText: "Get the latest posts delivered right to your inbox.",
    successMessage: "Thanks for subscribing to Rosnovsky Park™.",
  },
  socialLinks: {
    twitter: "https://twitter.com/rosnovsky",
    facebook: "",
    instagram: "https://www.instagram.com/rosnovsky",
    linkedin: "https://linkedin.com/in/rosnovsky",
    github: "https://github.com/rosnovsky",
    pinterest: "",
    youtube: "",
    dribbble: "",
    behance: "",
    externalLink: "",
    whatsapp: "",
  },
  contactWidget: {
    title: "Contact me",
    successMessage: "I'll get in touch with you soon.",
  },
  metadata: {
    title: "Rosnovsky Park™",
    description:
      "From Pacific Northwest to the World",
  },
  twitterCard: {
    title: "Rosnovsky Park™",
    description:
      "From Pacific Northwest to the World",
    imageUrl: "twitterImage.png",
    username: "@rosnovsky",
  },
  facebookCard: {
    title: "Rosnovsky Park™",
    description:
      "From Pacific Northwest to the World",
    imageUrl: "facebookImage.png",
    appId: "",
    width: 1000,
    height: 523,
  },
  siteTitle: "Rosnovsky Park™",
  siteDescription:
    "From Pacific Northwest to the World",
  language: "en",
  logoUrl: "logo.svg",
  articlePermalinkFormat: ":year/:month/:day/:slug",
  iconUrl:
    "https://ghost.theasdfghjkl.com/content/images/2020/05/draftbox-colored-icon.png",
  coverUrl: "cover.jpg",
  alternateLogoUrl: "alternateLogo.svg",
  themeConfig: {
    variables: [
      { varName: "--accent-color", value: "#6166DC" },
      { varName: "--accent-color-dark", value: "#E9DAAC" },
      { varName: "--success-color", value: "#46B17B" },
      { varName: "--success-color-dark", value: "#46B17B" },
      {
        varName: "--merriweather-font",
        value: `Merriweather`,
      },
      {
        varName: "--merriweather-font-bold",
        value: `700`,
      },
      {
        varName: "--system-font",
        value: `system-ui`,
      },
      {
        varName: "--system-font-normal",
        value: `400`,
      },
      {
        varName: "--system-font-semibold",
        value: `600`,
      },
      {
        varName: "--system-font-bold",
        value: `700`,
      },
      {
        varName: "--monospace-font",
        value: `Source Code Pro`,
      },
      {
        varName: "--monospace-font-normal",
        value: `400`,
      },
    ],
    fonts: [
      {
        family: "Merriweather",
        variants: ["700"],
        //subsets: ['latin']
        //text: 'Hello'
        fontDisplay: "swap",
        strategy: "selfHosted", // 'base64' || 'cdn'
      },
      {
        family: "Source Code Pro",
        variants: ["400"],
        //subsets: ['latin']
        //text: 'Hello'
        fontDisplay: "swap",
        strategy: "selfHosted", // 'base64' || 'cdn'
      },
    ],
  },
};
