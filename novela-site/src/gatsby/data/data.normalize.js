/* eslint-disable */

/**
 * In order to improve the authoring experience we'll set a fallback for hero images
 * when they're not provided. This will allow you to write articles without immediately
 * adding a hero image.
 *
 * @param {Object} heroSource
 */
function normalizeHero(article) {
  let hero = {
    full: {},
    regular: {},
    narrow: {},
    seo: {},
  };

  if (article.feature_image) {
    hero = {
      full: article.feature_image
    };
  } else {
    console.log('\u001B[33m', `Missing hero for "${article.title}"`);
  }

  return hero;
}

function normalizeAvatar(author) {
  let avatar = {
    small: {},
    medium: {},
    large: {},
  };

  if (author.avatar) {
    avatar = {
      small: author.avatar.small.fluid,
      medium: author.avatar.medium.fluid,
      large: author.avatar.large.fluid,
    };
  } else {
    console.log('\u001B[33m', `Missing avatar for "${author.name}"`);
  }

  return avatar;
}

module.exports.local = {
  articles: ({ node: article }) => {
    const author = article.authors.reduce((curr, next, index, array) => {
      if (array.length === 1) {
        return next.name;
      }

      return `${curr + next.name}, `;
    }, ``);

    return {
      ...article,
      author,
      html: article.html,
      reading_time: article.reading_time,
    };
  },
  authors: ({ node: author }) => {
    return {
      ...author,
      // social: author.social.map(s => ({ url: s })),
      social: author.url,
      slug: author.slug,
      authorsPage: author.url,
    };
  },
};
