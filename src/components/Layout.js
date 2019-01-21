import React from 'react'
import { Link } from 'gatsby'

import { rhythm, scale } from '../utils/typography'

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1.1),
            marginBottom: rhythm(1.1),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        {header}
        {children}
        <footer>
          <small>
            <div style={{ float: 'right' }}>
              Subscribe to{' '}
              <a href="/rss.xml" target="_blank" rel="noopener noreferrer">
                RSS
              </a>{' '}
              feed
            </div>
            <a
              href="https://twitter.com/rosnovsky"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>{' '}
            &bull;{' '}
            <a
              href="https://github.com/rosnovsky"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>{' '}
          </small>
        </footer>
      </div>
    )
  }
}

export default Layout
