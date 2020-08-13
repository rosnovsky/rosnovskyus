/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'Gatsby Casper',
    description: 'A port of the casper blog built for gatsby',
    siteUrl: 'https://gatsby-casper.netlify.com', // full path to blog - no ending slash
  },
  mapping: {
    'MarkdownRemark.frontmatter.author': 'AuthorYaml',
  },
  plugins: [
    // sharp plugins are only needed if you want to use gatsby image processing tools
    `gatsby-plugin-sharp`,
    'gatsby-transformer-sharp',
    `gatsby-transformer-sharp`,
    {
        resolve: `gatsby-plugin-ghost-images`,
        options: {
            // An array of node types and image fields per node
            // Image fields must contain a valid absolute path to the image to be downloaded
            lookup: [
                {
                    type: `GhostPost`,
                    imgTags: [`feature_image`, `profile_image`],
                },
                {
                    type: `GhostPage`,
                    imgTags: [`feature_image`],
                },
                {
                    type: `GhostSettings`,
                    imgTags: [`cover_image`],
                },
            ],
            // Additional condition to exclude nodes 
            // Takes precedence over lookup
            exclude: node => (
                node.ghostId === undefined
            ),
            // Additional information messages useful for debugging
            verbose: true,
            // Option to disable the module (default: false)
            disable: false,
        },
    },
    'gatsby-plugin-sitemap',
    // {
    //   resolve: 'gatsby-plugin-sharp',
    //   options: {
    //     quality: 100,
    //     stripMetadata: true,
    //   },
    // },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1rem',
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          'gatsby-remark-abbr',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 2000,
              quality: 100,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-ghost`,
      options: {
          apiUrl: `https://rosnovsky.us`,
          contentApiKey: `158a98727d25d7d37ae3d14006`,
          version: `v3`
      }
    },
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://gatsby-casper.netlify.com',
      },
    },
    'gatsby-plugin-emotion',
    'gatsby-plugin-typescript',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-yaml',
    'gatsby-plugin-feed',
    {
      resolve: 'gatsby-plugin-postcss',
      options: {
        postCssPlugins: [require('postcss-color-function'), require('cssnano')()],
      },
    },
  ],
};
