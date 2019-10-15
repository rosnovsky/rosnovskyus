import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';

import SiteNav from '../header/SiteNav';
import { useStaticQuery } from 'gatsby';

beforeEach(() => {
  useStaticQuery.mockImplementationOnce(() => {
    return {
      avatar: {
        childImageSharp: {
          fixed: {
            base64: 'foo',
            width: 1,
            height: 1,
            src: 'foo',
            srcSet: 'foo',
          },
        },
      },
      site: {
        siteMetadata: {
          author: 'Mock author',
        },
      },
    };
  });
});

describe('SiteNav Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SiteNav />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders correctly', () => {
    const bio = render(<SiteNav />);
    expect(bio).toMatchSnapshot();
  });
});
