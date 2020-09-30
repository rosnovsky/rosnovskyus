let siteConfig;
let ghostConfig;

// loading site config
try {
  siteConfig = require(`./siteConfig`);
} catch (e) {
  siteConfig = null;
}

// loading ghost config
try {
  ghostConfig = require(`./.ghost.json`);
} catch (e) {
  ghostConfig = {
    development: {
      apiUrl: process.env.GHOST_API_URL,
      contentApiKey: process.env.GHOST_CONTENT_API_KEY,
      version: process.env.GHOST_VERSION,
    },
    production: {
      apiUrl: process.env.GHOST_API_URL,
      contentApiKey: process.env.GHOST_CONTENT_API_KEY,
      version: process.env.GHOST_VERSION,
    },
  };
} finally {
  const { apiUrl, contentApiKey } =
    process.env.NODE_ENV === `development`
      ? ghostConfig.development
      : ghostConfig.production;

  if (!apiUrl || !contentApiKey || contentApiKey.match(/<key>/)) {
    ghostConfig = null; //allow default config to take over
  }
}

// setting up plugins
let gatsbyPlugins = [
  {
    resolve: `@draftbox-co/gatsby-ghost-novela-theme`,
    options: {
      ghostConfig: ghostConfig,
      siteConfig: siteConfig,
      articlePermalinkFormat: "blog/:year/:month/:day/:slug"
    },
  },
];

module.exports = {
  plugins: gatsbyPlugins,
};
