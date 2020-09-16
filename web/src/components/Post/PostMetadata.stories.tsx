import React from 'react';
import { PostMetadata } from './PostMetadata';

export default {
  title: 'Post/Metadata',
  component: PostMetadata,
};

export const Regular = (): JSX.Element => (
  <PostMetadata metadata={{ publishedAt: 'a month ago' }} />
);

export const Featured = (): JSX.Element => (
  <PostMetadata metadata={{ publishedAt: 'a week ago' }} />
);
