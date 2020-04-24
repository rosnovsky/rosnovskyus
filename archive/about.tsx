import IndexLayout from '../src/layouts';
import Wrapper from '../src/components/Wrapper';
import SiteNav from '../src/components/header/SiteNav';
import { SiteHeader, outer, inner, SiteMain } from '../src/styles/shared';
import * as React from 'react';
import { css } from '@emotion/core';

import {
  PostFullHeader,
  PostFullTitle,
  NoImage,
  PostFull,
} from '../src/templates/post';
import { PostFullContent } from '../src/components/PostContent';
import Footer from '../src/components/Footer';
import Helmet from 'react-helmet';

const PageTemplate = css`
  .site-main {
    background: #fff;
    padding-bottom: 4vw;
  }
`;

const About: React.FC = () => (
  <IndexLayout>
    <Helmet>
      <title>About</title>
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
            <PostFullTitle>About Rosnovsky Park™</PostFullTitle>
          </PostFullHeader>

          <PostFullContent className="post-full-content">
            <div className="post-content">
              <p>
                In early 2006 I was considering starting a podcast. It, of
                course, needed a name. Living in Moscow, Russia, at the time,
                Rosnovsky Park (as in Gorky park) made perfect sense. I've
                diverted from this brand a few times, but it's so dear to my
                heart that I always come back.
              </p>
              <p>
                Hi, I'm Art Rosnovsky. I'm a software engineer and web developer
                from Greater Seattle area, working mostly with JavaScript stack
                (JavaScript, React, Node), and venturing to the land of C#/.NET
                every now and again. I solve problems, one line of code at a
                time.
              </p>
              <p>
                More often than not, I'm invited by businesses of all sizes to
                come on board and deliver a product, per specs, within a few
                months. This is, basically, my specialty: I come in, solve
                problems, build projects, and deliver products, all on a tight
                schedule.
              </p>
              <p>
                If you have a project for me, or have a problem you need solved,
                just email me at artem@rosnovsky.us
              </p>
            </div>
          </PostFullContent>
        </article>
      </main>
      <Footer />
    </Wrapper>
  </IndexLayout>
);

export default About;
