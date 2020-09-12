import React from 'react';
// import { action } from '@storybook/addon-actions';
import { PostHeading } from './PostHeading';

export default {
  title: 'Post/Headings',
  component: PostHeading,
};

export const Regular = (): JSX.Element => <PostHeading title="Hello World" />;
export const Featured = (): JSX.Element => <PostHeading title="Hello World" type="featured" />;
