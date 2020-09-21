// helper that grabs the mdx resolver when given a string fieldname
const mdxResolverPassthrough = fieldName => async (
  source,
  arguments_,
  context,
  info,
) => {
  const type = info.schema.getType(`GhostPost`);
  const mdxNode = context.nodeModel.getNodeById({
    id: source.parent,
  });
  const resolver = type.getFields()[fieldName].resolve;
  const result = await resolver(mdxNode, arguments_, context, {
    fieldName,
  });
  console.warn(result)
  return result;
};

// Define resolvers for custom fields
module.exports =  ({ createResolvers }) => {
  createResolvers({
    Article: {
      excerpt: {
        resolve: mdxResolverPassthrough(`excerpt`),
      },
      html: {
        resolve: mdxResolverPassthrough(`body`),
      },
      reading_time: {
        resolve: mdxResolverPassthrough(`reading_time`),
      },
    },
  });
};
