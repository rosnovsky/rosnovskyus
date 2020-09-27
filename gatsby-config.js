require("dotenv").config();

const siteMetadata = {
  title: `Rosnovsky Park™`,
  name: `Rosnovsky Park`,
  siteUrl: `https://rosnovsky.us`,
  description: `This is my description that will be used in the meta tags and important for search results`,
  hero: {
    heading: `From Pacific Northwest to the World.`,
    maxWidth: 652,
  },
  social: [
    {
      url: "https://github.com/rosnovsky"
    },
    { 
      url: "https://instagram.com/rosnovsky"
    },
    { 
      url: "https://dev.to/rosnovsky"
    },
    {
      url: "https://linkedin.com/in/rosnovsky"
    },
    {
      name: `mailto`,
      url: `mailto:rosnovsky@hey.com`,
    },
  ],
};

const plugins = [
  {
    resolve: "@narative/gatsby-theme-novela",
    options: {
      contentPosts: "content/posts",
      contentAuthors: "content/authors",
      articlePermalinkFormat: `blog/:year/:month/:day/:slug`,
      rootPath: "/",
      basePath: "/",
      authorsPage: true,
      mailchimp: false,
      sources: {
        local: true,
        contentful: false,
      },
    },
  },
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `Novela by Narative`,
      short_name: `Novela`,
      start_url: `/`,
      background_color: `#fff`,
      theme_color: `#fff`,
      display: `standalone`,
      icon: `src/assets/favicon.png`,
    },
  },
  {
    resolve: "gatsby-plugin-mailchimp",
    options: {
      endpoint:
        "https://narative.us19.list-manage.com/subscribe/post?u=65ef169332a03669b9538f6ef&amp;id=c55c426282",
    },
  },
  'gatsby-plugin-react-helmet',
  {
    resolve: 'gatsby-plugin-cloudinary-social-cards',
    options: {
      cloudName: 'rosnovsky',
      apiKey: process.env.CLOUDINARY_API_KEY,
      apiSecret: process.env.CLOUDINARY_API_SECRET,
      imageTemplate: 'src/assets/social-card-template.jpg',
    },
  },
];

/**
 * For development purposes if there's no Contentful Space ID and Access Token
 * set we don't want to add in gatsby-source-contentful because it will throw
 * an error.
 *
 * To enanble Contentful you must
 * 1. Create a new Space on contentful.com
 * 2. Import the Contentful Model from @narative/gatsby-theme-novela/conteful
 * 3. Add .env to www/ (see www/env.example)
 * 4. Enable contentful as a source in this file for @narative/gatsby-theme-novela
 */
if (process.env.CONTENTFUL_SPACE_ID && process.env.CONTENTFUL_ACCESS_TOKEN) {
  plugins.push({
    resolve: "gatsby-source-contentful",
    options: {
      spaceId: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    },
  });
}

module.exports = {
  siteMetadata,
  plugins,
};
