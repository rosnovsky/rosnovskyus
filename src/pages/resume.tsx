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
import PostCard from '../components/PostCard';

const PageTemplate = css`
    .site-main {
        background: #fff;
        padding-bottom: 4vw;
    }
`;

const Resume: React.FC = () => (
    <IndexLayout>
        <Helmet>
            <title>Artem Rosnovsky - Resume</title>
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
                        <PostFullTitle>Artem Rosnovsky<br/> <h1>Web Developer</h1></PostFullTitle>
                    </PostFullHeader>

                    <PostFullContent className="post-full-content">
                        <div className="post-content">
                            <div>
                                <p>JavaScript, React, Node.js, C#, .Net Core, MongoDB, MSSQL, REST APIs, HTML, CSS</p>
                            </div>
                            <div>
                                <div>
                                    <h1>Microsoft</h1>
                                    <h3>Web Developer</h3>
                                    <h6>Apr 2019 - Present</h6>
                                    <p>Blah Blah</p>
                                </div>
                                <div>
                                    <h2>Transmark Logistics</h2>
                                    <h3>Web Developer</h3>
                                    <h6>Oct 2018 - Mar 2019</h6>
                                    <p>Blah Blah</p>
                                </div>
                                <div>
                                    <h2>AT&T</h2>
                                    <h3>Implementation Specialist</h3>
                                    <h6>Apr 2017 - Sep 2018</h6>
                                    <p>Blah Blah</p>
                                </div>
                                <div>
                                    <h2>Intel</h2>
                                    <h3>Web Producer</h3>
                                    <h6>Apr 2019 - Present</h6>
                                    <p>Blah Blah</p>
                                </div>
                            </div>

                            <div>
                                <h3>Farmslist</h3>
                                <h3>MOZ</h3>
                            </div>
                            
                            <div>
                                <ul>
                                    <li>Associate of Arts, Fanshawe College</li>
                                    <li>Bachelor of Arts, Peoples' Friendship University of Russia</li>
                                </ul>
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
