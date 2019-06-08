import React from 'react'
import { Link } from 'gatsby'

import LangContext from '../context/LangContext'
import Toggle from './Toggle'
import russianFlag from '../assets/ru.svg'
import usaFlag from '../assets/us.svg'
import { rhythm, scale } from '../utils/typography'

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    const languageToggle = (
      <LangContext.Consumer>
        {lang => (
          <Toggle
            className="pull-right"
            icons={{
              checked: (
                <img
                  src={russianFlag}
                  width="16"
                  height="16"
                  role="presentation"
                  style={{ pointerEvents: 'none' }}
                />
              ),
              unchecked: (
                <img
                  src={usaFlag}
                  width="16"
                  height="16"
                  role="presentation"
                  style={{ pointerEvents: 'none' }}
                />
              ),
            }}
            checked={lang.postLanguage === 'English'}
            onChange={e =>
              lang.setPostLanguage(e.target.checked ? 'English' : 'Russian')
            }
          />
        )}
      </LangContext.Consumer>
    )

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            fontFamily: `Roboto, sans-serif`,
            fontWeight: `900`,
            fontSize: `5rem`,
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
          {languageToggle}
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            marginTop: 0,
            fontFamily: `Roboto, sans-serif`,
            fontWeight: `900`,
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
          maxWidth: rhythm(30),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        {header}
        {children}
        <footer>
          <div
            style={{
              float: 'right',
              fontFamily: `franklin-gothic, sans-serif`,
              fontSize: `0.8rem`,
              fontWeight: `500`,
            }}
          >
            Subscribe:{' '}
            <a href="/rss.xml" target="_blank" rel="noopener noreferrer">
              RSS
            </a>{' '}
            /{' '}
            <a href="/podcast.xml" target="_blank" rel="noopener noreferrer">
              Podcast
            </a>{' '}
          </div>
          <div
            style={{
              float: 'left',
              fontFamily: `franklin-gothic, sans-serif`,
              fontSize: `0.8rem`,
              fontWeight: `500`,
            }}
          >
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
          </div>
        </footer>
      </div>
    )
  }
}

export default Layout
