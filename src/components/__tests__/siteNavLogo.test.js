import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';

import SiteNavLogo from '../header/SiteNavLogo';
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

describe('SiteNavLogo Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SiteNavLogo />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders correctly', () => {
    const siteNavLogo = render(<SiteNavLogo />);
    expect(bio).toMatchSnapshot();
  });
});
