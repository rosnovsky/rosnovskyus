import React from 'react'
import { Link, graphql } from 'gatsby'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import { rhythm } from '../utils/typography'
import { formatReadingTime, formatPodcastTime } from '../utils/helpers'

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `rosnovsky`, `javascript`, `react`]}
        />
        <Bio />
        {posts.map(({ node }) => {
          const title = (node.frontmatter.type === "podcast" ? "🎙 " + node.frontmatter.title : node.frontmatter.title) || node.fields.slug
          return (
            <div key={node.fields.slug}>
              <h3
                style={{
                  fontFamily: `proxima-nova, serif`,
                  fontWeight: `900`,
                  fontSize: `2rem`,
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <span
                style={{
                  fontFamily: `franklin-gothic, sans-serif`,
                  color: `hsla(0, 100%, 18%, .75)`,
                }}
              >
                {node.frontmatter.date}
                {` • • • ${node.frontmatter.type === "podcast" ? formatPodcastTime(node.frontmatter.time) : node.frontmatter.readingTime ? formatReadingTime(node.frontmatter.readingTime) : formatReadingTime(node.timeToRead)}`}
              </span>
              <p
                style={{
                  fontFamily: `franklin-gothic, sans-serif`,
                  fontSize: `1.2rem`,
                  fontWeight: `500`,
                }}
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.excerpt || node.excerpt,
                }}
              />
            </div>
          )
        })}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            lang
            excerpt
            readingTime
            type
            time
            cover {publicURL}
          }
          timeToRead
        }
      }
    }
  }
`
