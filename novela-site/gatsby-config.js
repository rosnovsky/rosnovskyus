module.exports = {
  siteMetadata: {
    title: `Rosnovsky Park™`,
    description: `From Pacific Northwest to the World`,
    author: `@rosnovsky`,
    siteUrl: "http://localhost:8000",
    name: "Boohoo",
    social: [{
      url: "twitter.com",
      name: "twitter"
    }]
  },
  plugins: [
    {
      resolve: `gatsby-source-ghost`,
      options: {
          apiUrl: `https://rosnovsky.us`,
          contentApiKey: `158a98727d25d7d37ae3d14006`,
          version: `v3` // Ghost API version, optional, defaults to "v3".
                        // Pass in "v2" if your Ghost install is not on 3.0 yet!!!
      }
    },
    `gatsby-plugin-typescript`,
    `gatsby-image`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-yaml`,
    `gatsby-plugin-theme-ui`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        setup: ({
          query: {
            site: { siteMetadata },
          },
          ...rest
        }) => {
          siteMetadata.feed_url = siteMetadata.siteUrl + '/rss.xml';
          siteMetadata.image_url =
            siteMetadata.siteUrl + '/icons/icon-512x512.png';
          const siteMetadataModified = siteMetadata;
          siteMetadataModified.feed_url = `${siteMetadata.siteUrl}/rss.xml`;
          siteMetadataModified.image_url = `${siteMetadata.siteUrl}/icons/icon-512x512.png`;

          return {
            ...siteMetadataModified,
            ...rest,
          };
        },
        feeds: [
          {
            serialize: ({ query: { site, allArticle, allContentfulArticle } }) => {
                return allArticle.edges
                  .filter(edge => !edge.node.visibility)
                  .map(edge => {
                    return {
                      ...edge.node,
                      description: edge.node.excerpt,
                      date: edge.node.date,
                      url: site.siteMetadata.siteUrl + edge.node.slug,
                      guid: site.siteMetadata.siteUrl + edge.node.slug,
                      // body is raw JS and MDX; will need to be processed before it can be used
                      // custom_elements: [{ "content:encoded": edge.node.body }],
                      author: edge.node.author,
                    };
                  });
              },
              
            query:`
              {
                allArticle(sort: {order: DESC, fields: date}) {
                  edges {
                    node {
                      body
                      excerpt
                      date
                      slug
                      title
                      author
                      visibility
                    }
                  }
                }
              }
              `,
            output: '/rss.xml',
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        displayName: process.env.NODE_ENV === `development`,
      },
    },
  ],
};
