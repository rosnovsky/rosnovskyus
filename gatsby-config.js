module.exports = {
  siteMetadata: {
    title: `Rosnovsky Park™`,
    author: `Artem Rosnovsky`,
    description: `Pushing Bytes & Pixels 👨‍💻🎙🏕`,
    siteUrl: `https://rosnovsky.us`,
    social: {
      twitter: `rosnovsky`,
      github: `rosnovsky`
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/podcast`,
        name: `podcast`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
          {
            resolve: 'gatsby-remark-embed-video',
            options: {
              width: 800,
              ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
              related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
              noIframeBorder: true, //Optional: Disable insertion of <style> border: 0
            },
          },
          `gatsby-remark-reading-time`,
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-42452771-5`,
      },
    },
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
            ...rest
          },
        }) => {
          return {
            ...siteMetadata,
            ...rest,
            description: "От автора Rosnovsky Park™ Weekly и Rosnovsky in Canada! Самый аутентичный подкаст на русском языке! Evergreen Podcast: Смотри ушами. Легендарный ведущий старейших подкастов на русском языке представляет третью серию подкастов — Вечнозелёный подкаст из вечнозелёного штата Вашингтон, что на Тихоокеанском Северо-Западе США 🇺🇸. Путешествия, походы, природа, работа, технологии, семья, дети, деньги — всё, что волнует интересует!",
            custom_namespaces: {
              'itunes': 'http://www.itunes.com/dtds/podcast-1.0.dtd',
            },
            custom_elements: [
              {
                'itunes:image': {
                  _attr: {
                    href: "https://podtema.com/wp-content/uploads/2018/07/cover.png"
                  }
                },

                "itunes:owner":
                {
                  "itunes:name": "Artem Rosnovsky",
                  "itunes:email": "artem@rosnovsky.us"
                },

                "itunes:category": "Personal Journals",
                "itunes:category": "Places & Travel",
                "itunes:category": "Society & Culture",

                "itunes:keywords": "США, Канада, иммиграция, истории, Вашингтон, Орегон, росновский",
                "itunes:explicit": "no",
                "itunes:author": "Artem Rosnovsky",
                "itunes:summary": "От автора Rosnovsky Park™ Weekly и Rosnovsky in Canada! Самый аутентичный подкаст на русском языке! Evergreen Podcast: Смотри ушами. Легендарный ведущий старейших подкастов на русском языке представляет третью серию подкастов — Вечнозелёный подкаст из вечнозелёного штата Вашингтон, что на Тихоокеанском Северо-Западе США 🇺🇸. Путешествия, походы, природа, работа, технологии, семья, дети, деньги — всё, что волнует интересует!",
                "itunes:subtitle": "From Pacific Northwest to the World"
              }
            ]
          }
        },
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                const siteUrl = site.siteMetadata.siteUrl
                const postText = `
                <div style="margin-top=55px; font-style: italic;">(This is a blog post I've posted at rosnovsky.us. You can read it <a href="${siteUrl +
                  edge.node.fields.slug}">here</a>.)</div>
              `

                let html = edge.node.html
                html = html
                  .replace(/href="\//g, `href="${siteUrl}/`)
                  .replace(/src="\//g, `src="${siteUrl}/`)
                  .replace(/"\/static\//g, `"${siteUrl}/static/`)
                  .replace(/,\s*\/static\//g, `,${siteUrl}/static/`)

                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.frontmatter.spoiler,
                  date: edge.node.fields.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ 'content:encoded': html + postText }],
                })
              })
            },

            query: `
              {
                allMarkdownRemark(
                  limit: 1000,
                  sort: { order: DESC, fields: [frontmatter___date] }
                  filter: {frontmatter: { type: {ne: "podcast"}}}
                ) {
                  edges {
                    node {
                      excerpt(pruneLength: 250)
                      html
                      fields { 
                        slug   
                      }
                      frontmatter {
                        title
                        date
                        excerpt
                      }
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: 'Rosnovsky Park™ RSS Feed',
          },
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                const siteUrl = site.siteMetadata.siteUrl
                let html = edge.node.html
                html = html
                  .replace(/href="\//g, `href="${siteUrl}/`)
                  .replace(/src="\//g, `src="${siteUrl}/`)
                  .replace(/"\/static\//g, `"${siteUrl}/static/`)
                  .replace(/,\s*\/static\//g, `,${siteUrl}/static/`)

                return Object.assign({}, edge.node.frontmatter, {
                  title: edge.node.frontmatter.title,
                  description: edge.node.excerpt,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  date: edge.node.frontmatter.date,
                  lat: 47.84311, //optional latitude field for GeoRSS
                  long: -122.204579, //optional longitude field for GeoRSS
                  enclosure: { url: edge.node.frontmatter.source, size: edge.node.frontmatter.size * 1048576, type: "audio/mp3" },
                  custom_elements: [
                    {
                      'itunes:duration': edge.node.frontmatter.time * 60,
                      "content:encoded": html,
                      "itunes:episode": edge.node.frontmatter.episode,
                      "itunes:episodeType": edge.node.frontmatter.episodeType,
                      "itunes:author": "Artem Rosnovsky",
                    }
                  ]
                })
              })
            },

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
              allMarkdownRemark(
                limit: 1000,
                sort: { order: DESC, fields: [frontmatter___date] }
                filter: {frontmatter: { type: {eq: "podcast"}}}
                ) {
                  edges {
                    node {
                      excerpt(pruneLength: 250)
                      html
                      fields { 
                        slug   
                      }
                      frontmatter {
                        title
                        date(formatString: "MMMM DD, YYYY")
                        lang
                        type
                        source
                        cover {publicURL}
                        time
                        size
                        episode
                        episodeType
                        mentions {type, text, url, isbn}
                      }
                    }
                  }
                }
              }
            `,
            output: '/podcast.xml',
            title: 'Evergreen Podcast',
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rosnovsky Park™`,
        short_name: `Rosnovsky.us`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/favicon.ico`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
