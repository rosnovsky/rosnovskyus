import React from 'react';
import { graphql, Link } from 'gatsby';
import BasePortableText from '@sanity/block-content-to-react';
// import {
//   mapEdgesToNodes,
//   filterOutDocsWithoutSlugs,
//   filterOutDocsPublishedInTheFuture,
// } from '../lib/helpers';
import { imageUrlFor } from '../lib/image-url';
import clientConfig from '../../client-config';
import Figure from '../components/Figure';
import { Tags } from '../components/Post/Tags';
import { PostHeading } from '../components/Post/PostHeading';
import { PostMetadata } from '../components/Post/PostMetadata';
import getShareImage from '@jlengstorf/get-share-image';

type Props = {
  data: Record<string, any>;
  errors: string;
};

const Index = (props: Props): JSX.Element => {
  const { data, errors } = props;

  if (errors) {
    throw new Error(errors);
  }

  // const site = (data || {}).site;
  // const postNodes = (data || {}).posts
  //   ? mapEdgesToNodes(data.posts)
  //       .filter(filterOutDocsWithoutSlugs)
  //       .filter(filterOutDocsPublishedInTheFuture)
  //   : [];

  const serializers = {
    types: {
      // eslint-disable-next-line react/display-name
      authorReference: ({ node }: any): JSX.Element => <span>{node.author.name}</span>,
      mainImage: Figure,
    },
  };

  const PortableText = ({ blocks }: any) => (
    <BasePortableText blocks={blocks} serializers={serializers} {...clientConfig.sanity} />
  );

  const options = {
    title: data.posts.edges[0].node.title,
    tagline: '#hike #photo #travel',
    cloudName: 'rosnovsky',
    imagePublicID: 'Frame_1_i5onru',
    font: 'futura',
    textColor: '232129',
  };
  const socialImage = getShareImage(options);

  // if (!site) {
  //   throw new Error(
  //     'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
  //   )
  // }
  return (
    <>
      <div>
        <nav className="flex items-center justify-between flex-wrap bg-gray-200 p-6 text-teal-900">
          <div className="flex items-center flex-shrink-0 text-teal-900 mr-6">
            <svg
              className="fill-current h-8 w-8 mr-2"
              width="54"
              height="54"
              viewBox="0 0 54 54"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
            </svg>
            <span className="font-semibold text-xl tracking-tight">
              {data.sanitySiteSettings.title}
            </span>
          </div>
          <div className={`w-full lg:block flex-grow lg:flex lg:items-center lg:w-auto`}></div>
        </nav>
      </div>
      <div className="container max-w-md mx-auto mt-10">
        <div className="rounded overflow-hidden shadow-lg">
          <img
            src={
              imageUrlFor(data.posts.edges[0].node.mainImage)
                .width(600)
                .height(Math.floor((9 / 16) * 600))
                .auto(`format`)
                .url() || undefined
            }
            // alt={props.mainImage.alt}
            className="w-full"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl">
              <Link to={`/blog/${data.posts.edges[0].node.slug.current}`}>
                <PostHeading title={data.posts.edges[0].node.title} />
              </Link>
            </div>
            <div className="w-full text-sm mb-3 text-gray-500">
              <PostMetadata metadata={{ publishedAt: data.posts.edges[0].node.publishedAt }} />
            </div>
            <div className="text-gray-700 text-base">
              <PortableText blocks={data.posts.edges[0].node._rawBody} />
            </div>
          </div>
          <div className="px-6 py-4">
            <Tags>
              {[
                { title: 'hike', type: 'featured' },
                { title: 'photo' },
                { title: 'travel', type: 'featured' },
              ]}
            </Tags>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;

export const query = graphql`
  fragment Image on SanityImage {
    crop {
      _key
      _type
      top
      bottom
      left
      right
    }
    hotspot {
      _key
      _type
      x
      y
      height
      width
    }
    asset {
      _id
    }
  }
  query IndexPageQuery {
    sanitySiteSettings {
      title
    }
    posts: allSanityPost(
      limit: 6
      sort: { fields: [publishedAt], order: DESC }
      filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
    ) {
      edges {
        node {
          id
          publishedAt(fromNow: true)
          mainImage {
            ...Image
          }
          title
          slug {
            current
          }
          _rawBody(resolveReferences: { maxDepth: 10 })
        }
      }
    }
  }
`;
