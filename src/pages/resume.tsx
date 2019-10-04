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
                        <PostFullTitle>Artem Rosnovsky<br/> <h1>Web Developer</h1><h3><a href="https://github.com/rosnovsky">Github</a> | <a href="art-rosnovsky-web-dev.pdf">Full Resume (PDF)</a></h3></PostFullTitle>
                    </PostFullHeader>

                    <PostFullContent className="post-full-content">
                        <div className="post-content">
                            <div>
                                <p><strong>Toolkit</strong>: JavaScript, React, Node.js, C#, .Net Core, MongoDB, MSSQL, REST APIs, HTML, CSS, and more.</p>
                            </div>
                            <div>
                                <div>
                                    <h1>Microsoft</h1>
                                    <h3>Web Developer</h3>
                                    <h6>Apr 2019 - Oct 2019</h6>
                                    <p><em>Developing internal tools and solutions for IDCxP FastTrack Team.</em></p>

                                    <p>Developed a time-saving search interface (React) with the backend server (C#, .NET Core, MSSQL) for an internal management application, with advanced Azure Active Directory-based authentication, server and database performance tweaks, and responsive client interface.</p>
                                </div>
                                <div>
                                    <h2>Transmark Logistics</h2>
                                    <h3>Web Developer</h3>
                                    <h6>Oct 2018 - Mar 2019</h6>
                                    <ul>

                                    <li>Designed and delivered an MVP of a key internal shipment and task tracking and management system</li>
                                    <li>Recovered over 40 minutes of productive time per user, which previously was lost to inefficient creating and managing tasks, via dramatic UI and user workflow improvements</li>
                                    <li>Designed, developed and implemented a robust staging/production development CI/CD pipeline with Docker (and docker-compose) on multi-host cloud infrastructure</li>
                                    <li>Lead development of frontend and backend system using best practices and appropriate technologies (Python, Flask, MySQL, jQuery, JavaScript, CSS, HTML)</li>
                                    <li>Managed requirements and feedback from stakeholders and users</li>
                                    <li>Successfully established project development timeline and kept the team on track throughout an extremely condensed time-frame</li>
                                    </ul>
                                </div>
                                <div>
                                    <h2>AT&T</h2>
                                    <h3>Implementation Specialist</h3>
                                    <h6>Apr 2017 - Sep 2018</h6>
                                    <p>Implemented over 100 code and content items & fixed over 100 defects across AT&T’s website AT&T MyServices client area</p>
                                </div>
                                <div>
                                    <h2>Intel</h2>
                                    <h3>Web Producer</h3>
                                    <h6>Apr 2019 - Present</h6>
                                    <ul>
                                        <li>Assisted in managing tasks for a team of web authors and QA engineers</li>
                                        <li>Successfully launched Intel’s new Product catalog, using AEM, HTML, CSS, and Bootstrap</li>
                                    </ul>
                                </div>
                            </div>

                            <div>
                                <h3>Farmslist</h3>
                                <h6>Founder, Web Developer</h6>
                                <ul>
                                    <li>Provided guidance for UX/UI designer and architecture for the project as a whole</li>
                                    <li>Developed and fine-tuned Handlebars-based templates for transactional emails</li>
                                    <li>Developed a variety of front end elements with Javasctipt and JSX (React), along with backend API elements for Node.js and external API interfaces (mostly for Google APIs)</li>
                                </ul>
                            </div>
                            
                            <div>
                                <h3>Education</h3>
                                <ul>
                                    <li>Associate of Arts (Interactive Design and Production), Fanshawe College</li>
                                    <li>Bachelor of Arts (Journalism) Peoples' Friendship University of Russia</li>
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
