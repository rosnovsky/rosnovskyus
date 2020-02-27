import IndexLayout from '../layouts';
import Wrapper from '../components/Wrapper';
import SiteNav from '../components/header/SiteNav';
import { SiteHeader, outer, inner, SiteMain } from '../styles/shared';
import * as React from 'react';
import { css } from '@emotion/core';

import {
  PostFullHeader,
  PostFullTitle,
  NoImage,
  PostFull,
} from '../templates/post';
import { PostFullContent } from '../components/PostContent';
import Footer from '../components/Footer';
import Helmet from 'react-helmet';

const PageTemplate = css`
  .site-main {
    background: #fff;
    padding-bottom: 4vw;
  }
`;

const Resume: React.FC = () => (
  <IndexLayout>
    <Helmet>
      <title>Art Rosnovsky - Resume</title>
    </Helmet>
    <Wrapper css={PageTemplate}>
      <header css={[outer, SiteHeader]}>
        <div css={inner}>
          <SiteNav />
        </div>
      </header>
      <main id="site-main" className="site-main" css={[SiteMain, outer]}>
        <article className="post page" css={[PostFull, NoImage]}>
          <PostFullHeader>
            <PostFullTitle>
              <h1>What I use</h1>
            </PostFullTitle>
          </PostFullHeader>

          <PostFullContent className="post-full-content">
            <div className="post-content">
              <div>
                <p>
                  Every now and then people ask me what I use for work and in
                  personal life: what tools, apps, settings, etc. So, here goes.
                </p>
                <div>
                  <h3>Hardware</h3>
                  <p>These things I use more or less on a daily basis.</p>
                  <ul>
                    <li>MacBook Pro 16" - MacOS X Catalina (work)</li>
                    <li>Dell XPS 15 — Manjaro Linux (personal)</li>
                    <li>iPhone X</li>
                    <li>Kindle Oasis</li>
                    <li>Bose QuiteComfort 35</li>
                  </ul>
                  <h3>Software</h3>
                  <ul>
                    <li>VS Code (VS Codium on Linux)</li>
                    <ul>
                      <li>Night Owl (Dark) Theme</li>
                      <li>Dank Mono font</li>
                    </ul>
                    <li>iTerm (work) and Kitty (personal)</li>
                    <li>zsh with oh-my-zh</li>
                    <li>Chrome (work) and Firefox (personal)</li>
                  </ul>
                  <h3>Web Development</h3>
                  <ul>
                    <li>JavaScript / Typescript</li>
                    <li>yarn</li>
                    <li>Node</li>
                    <li>React</li>
                    <li>Svelte</li>
                    <li>GraphQL (Apollo)</li>
                  </ul>
                </div>
              </div>
            </div>
          </PostFullContent>
        </article>
      </main>
      <Footer />
    </Wrapper>
  </IndexLayout>
);

export default Resume;
