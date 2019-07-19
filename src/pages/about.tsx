import IndexLayout from '../layouts';
import Wrapper from '../components/Wrapper';
import SiteNav from '../components/header/SiteNav';
import { SiteHeader, outer, inner, SiteMain } from '../styles/shared';
import * as React from 'react';
import { css } from '@emotion/core';

import { PostFullHeader, PostFullTitle, NoImage, PostFull } from '../templates/post';
import { PostFullContent } from '../components/PostContent';
import Footer from '../components/Footer';
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
                In early 2006 I was considering starting a podcast. It, of course, needed a name. Living in Moscow, Russia, at the time, Rosnovsky Park (as in Gorky park) made perfect sense. I've diverted from this brand a few times, but it's so dear to my heart that I always come back.  
              </p>
              <p>
                Hi, I'm Artem Rosnovsky. I'm a software engineer and web developer from Greater Seattle area, working mostly with JavaScript stack (JavaScript, React, Node), and venturing to the land of C#/.NET every now and again. I solve problems, one line of code at a time. 
              </p>
              <p>
                More often than not, I'm invited by businesses of all sizes to come on board and deliver a product, per specs, within a few months. This is, basically, my specialty: I come in, solve problems, build projects, and deliver products, all on a tight schedule. 
              </p>
              <p>
                If you have a project for me, or have a problem you need solved, just leave your name below or email me at artem@rosnovsky.us
              </p>
              <form name="contact" method="POST" data-netlify="true">
              <p>
                <label>Your Name: <input type="text" name="name" /></label>   
              </p>
              <p>
                <label>Your Email: <input type="email" name="email" /></label>
              </p>
                <p>
                  <button type="submit">Send</button>
                </p>
              </form>
            </div>
          </PostFullContent>
        </article>
      </main>
      <Footer />
    </Wrapper>
  </IndexLayout>
);

export default About;
