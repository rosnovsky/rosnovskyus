import React from 'react'
import {graphql} from 'gatsby'
import {imageUrlFor} from '../lib/image-url'
import BasePortableText from '@sanity/block-content-to-react'
import clientConfig from '../../client-config'
import Figure from "../components/Figure"

const serializers = {
  types: {
    authorReference: ({node}) => <span>{node.author.name}</span>,
    mainImage: Figure
  }
}

const PortableText = ({blocks}) => (
  <BasePortableText blocks={blocks} serializers={serializers} {...clientConfig.sanity} />
)

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
  query BlogPostTemplateQuery($id: String!) {
    post: sanityPost(id: {eq: $id}) {
      id
      publishedAt
      categories {
        _id
        title
      }
      mainImage {
        ...Image
      }
      title
      slug {
        current
      }
      # _rawExcerpt(resolveReferences: {maxDepth: 5})
      _rawBody(resolveReferences: {maxDepth: 5})
    #   authors {
    #     _key
    #     author {
    #       image {
    #         crop {
    #           _key
    #           _type
    #           top
    #           bottom
    #           left
    #           right
    #         }
    #         hotspot {
    #           _key
    #           _type
    #           x
    #           y
    #           height
    #           width
    #         }
    #         asset {
    #           _id
    #         }
    #       }
    #       name
    #     }
    #   }
      }
  }
`

const BlogPostTemplate = props => {
  const {data, errors} = props
  const post = data && data.post
  return (
      <BlogPost {...post} />
  )
}

export default BlogPostTemplate

function BlogPost (props) {
  const {_rawBody, authors, categories, title, mainImage, publishedAt} = props
  return (
    <article>
      {mainImage && mainImage.asset && (
        <div>
          <img
            src={imageUrlFor(mainImage)
              .width(1200)
              .height(Math.floor((9 / 16) * 1200))
              .fit('crop')
              .auto('format')
              .url()}
            alt={mainImage.alt}
          />
        </div>
      )}
      <div>
        <div>
          <div>
            <h1>{title}</h1>
            {_rawBody && <PortableText blocks={_rawBody} />}
          </div>
          <aside>
            {publishedAt && (
              <div>
                {publishedAt}
              </div>
            )}
            {/* {authors && <AuthorList items={authors} title='Authors' />} */}
            {categories && (
              <div>
                <h3>Categories</h3>
                <ul>
                  {categories.map(category => (
                    <li key={category._id}>{category.title}</li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </div>
    </article>
  )
}
