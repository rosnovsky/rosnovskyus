/* eslint-disable */

// https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-transformer-sharp/src/fragments.js

const GatsbyFluid_withWebp = `
  base64
  aspectRatio
  src
  srcSet
  srcWebp
  srcSetWebp
  sizes
`;

module.exports.local = {
  articles: `{
    articles: 
    allGhostPost(
      limit: 1000
    ) {
      edges {
        node {
          id
          slug
          title
          authors {
            name
            profile_image
            bio
            id
          }
          excerpt
          canonical_url
          visibility
          feature_image 
        }
      }
    }
  }`,
  authors: `{
    authors: allGhostAuthor {
      edges {
        node {
          bio
          id
          name
          slug
          profile_image
          }
        }
      }
  }`,
};
