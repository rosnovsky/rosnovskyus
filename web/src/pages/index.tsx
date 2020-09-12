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

  // if (!site) {
  //   throw new Error(
  //     'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
  //   )
  // }
  return (
    <>
      <div>
        <nav className="flex items-center justify-between flex-wrap bg-orange p-6 text-burg">
          <div className="flex items-center flex-shrink-0 text-burg mr-6">
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
          <div className="block lg:hidden">
            <button
              // onClick={() => {
              //   setMenuOpen(isMenuOpen => !isMenuOpen)
              // }}
              className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
            >
              <svg
                className="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div className={`w-full lg:block flex-grow lg:flex lg:items-center lg:w-auto`}>
            <div className="text-sm lg:flex-grow">
              <a
                href="#responsive-header"
                className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
              >
                Docs
              </a>
              <a
                href="#responsive-header"
                className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
              >
                Examples
              </a>
              <a
                href="#responsive-header"
                className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
              >
                Blog
              </a>
            </div>
            <div>
              <a
                href="/"
                className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
              >
                Download
              </a>
            </div>
          </div>
        </nav>
      </div>
      <div className="container max-w-md mx-auto mt-10">
        <div className="rounded overflow-hidden shadow-lg">
          <img
            src={imageUrlFor(data.posts.edges[0].node.mainImage)
              .width(600)
              .height(Math.floor((9 / 16) * 600))
              .auto(`format`)
              .url()}
            // alt={props.mainImage.alt}
            className="w-full"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">
              <Link to={`/blog/${data.posts.edges[0].node.slug.current}`}>
                {data.posts.edges[0].node.title}
              </Link>
            </div>
            <p className="text-gray-700 text-base">
              <PortableText blocks={data.posts.edges[0].node._rawBody} />
            </p>
          </div>
          <div className="px-6 py-4">
            <span className="inline-block bg-burg rounded-full px-3 py-1 text-sm font-semibold text-brightGreen mr-2">
              #photography
            </span>
            <span className="inline-block bg-lightGreen rounded-full px-3 py-1 text-sm font-semibold text-darkGreen mr-2">
              #travel
            </span>
            <span className="inline-block bg-orange rounded-full px-3 py-1 text-sm font-semibold text-lighttGreen mr-2">
              #winter
            </span>
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
          publishedAt
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
