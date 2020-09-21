module.exports = ({ actions }) => {
  actions.createTypes(`
    type Article implements Node {
      id: ID!
      slug: String!
      title: String!
      date: Date! @dateformat
      author: String!
      excerpt(pruneLength: Int = 140): String!
      html: String!
      feature_image: String
      reading_time: Int
      url: String
    }
  `);
};
