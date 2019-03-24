import React from 'react'
import PropTypes from 'prop-types'

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                window.__onPreferredLanguageChange = function() {};

                function setPreferredLanguage(newLanguage) {
                  window.__preferredLanguage = newLanguage;
                  preferredLanguage = newLanguage;
                  window.__onPreferredLanguageChange(newLanguage);
                }

                var preferredLanguage;
                try {
                  preferredLanguage = localStorage.getItem('language');
                } catch (err) { }

                if (!preferredLanguage) {
                  userLang = navigator.language || navigator.userLanguage;
                  preferredLanguage = userLang === 'ru-RU' ? 'Russian' : 'English';
                }

                window.__setPreferredLanguage = function(newLanguage) {
                  setPreferredLanguage(newLanguage);
                  try {
                    localStorage.setItem('language', newLanguage);
                  } catch (err) {}
                }

                setPreferredLanguage(preferredLanguage || 'Russian');
              })();
            `,
          }}
        />
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
