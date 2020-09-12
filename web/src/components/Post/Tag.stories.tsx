import React from 'react';
// import { action } from '@storybook/addon-actions';
import { Tag } from './Tag';
import { Tags } from './Tags';

export default {
  title: 'Post/Tags',
  component: Tag,
};

export const Regular = (): JSX.Element => <Tag>photos</Tag>;

export const Featured = (): JSX.Element => <Tag type="featured">photos</Tag>;

export const TagBar = (): JSX.Element => {
  const tags = [
    { title: 'hike', type: 'featured' },
    { title: 'photo' },
    { title: 'travel', type: 'featured' },
  ];
  return <Tags>{tags}</Tags>;
};
