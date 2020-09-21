import React from 'react';

import SEO from '../../components/SEO';

import { IArticle, IAuthor } from '../../types';
import { graphql, useStaticQuery } from 'gatsby';

const siteQuery = graphql`
  {
    allSite {
      edges {
        node {
          siteMetadata {
            name
            siteUrl
          }
        }
      }
    }
  }
`;

interface ArticleSEOProps {
  article: IArticle;
  authors: IAuthor[];
  location: Location;
  imagelocation?: string;
}

const ArticleSEO: React.FC<ArticleSEOProps> = ({
  article,
  authors,
  location,
  imagelocation,
}) => {
  const results = useStaticQuery(siteQuery);
  const siteUrl = results.allSite.edges[0].node.siteMetadata.siteUrl;

  const authorsName = authors.map(author => (author.name));
  const authorsSlug = authors.map(author => (author.slug));
  const authorsBio = authors.map(author => (author.bio));

  // Checks if the source of the image is hosted on Contentful
  if (`${article.feature_image}`) {
    imagelocation = `https:${article.feature_image}`;
  } else {
    imagelocation = `${siteUrl + article.feature_image}`;
  }

  return (
    <SEO
      authorName={authorsName}
      authorsBio={authorsBio}
      authorsSlug={authorsSlug}
      canonicalUrl={article.url}
      dateforSEO={article.published_at}
      description={article.excerpt}
      image={imagelocation}
      isBlogPost={true}
      articlepathName={siteUrl + location.pathname}
      published={article.published_at}
      reading_time={article.reading_time}
      title={article.title}
      isSecret={article.visibility}
    >
    </SEO>
  );
};

export default ArticleSEO;
