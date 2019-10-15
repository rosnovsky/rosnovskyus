import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';

import Footer from '../Footer';
import { useStaticQuery } from 'gatsby';

describe('SiteNav Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Footer />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders correctly', () => {
    const bio = render(<Footer />);
    expect(bio).toMatchSnapshot();
  });
});
