import React from 'react'
import { Link, graphql } from 'gatsby'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import LangContext from '../context/LangContext'
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
        <LangContext.Consumer>
          {lang =>
            (lang.postLanguage
              ? posts.filter(
                  post => post.node.frontmatter.lang === lang.postLanguage
                )
              : posts
            ).map(({ node }) => {
              const title =
                (node.frontmatter.type === 'podcast'
                  ? '🎙 ' + node.frontmatter.title
                  : node.frontmatter.title) || node.fields.slug
              return (
                <div
                  key={node.fields.slug}
                  style={{
                    marginBottom: `5rem`,
                  }}
                >
                  <h3
                    style={{
                      fontFamily: `proxima-nova, serif`,
                      fontWeight: `900`,
                      fontSize: `3rem`,
                      marginBottom: rhythm(1 / 2),
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
                    {` • • • ${
                      node.frontmatter.type === 'podcast'
                        ? formatPodcastTime(node.frontmatter.time)
                        : node.frontmatter.readingTime
                        ? formatReadingTime(node.frontmatter.readingTime)
                        : formatReadingTime(node.timeToRead)
                    }`}
                  </span>
                  <p
                    style={{
                      fontFamily: `franklin-gothic, sans-serif`,
                      fontSize: `1.2rem`,
                      lineHeight: `2.4rem`,
                      fontWeight: `500`,
                      marginTop: `1rem`,
                    }}
                    dangerouslySetInnerHTML={{
                      __html:
                        node.frontmatter.type === 'podcast'
                          ? `<img src="${
                              node.frontmatter.cover.publicURL
                            }" /><br/><audio
                  style=
                    "width: 100%;"
                  preload="true"
                  controls src="${node.frontmatter.source}" /><br/>${node.html}`
                          : node.frontmatter.excerpt || node.html,
                    }}
                  />
                </div>
              )
            })
          }
        </LangContext.Consumer>
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
          html
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            lang
            excerpt
            type
            time
            cover {
              publicURL
            }
            source
          }
          timeToRead
        }
      }
    }
  }
`
