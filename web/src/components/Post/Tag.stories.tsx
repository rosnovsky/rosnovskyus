import React from 'react';
import { action } from '@storybook/addon-actions';
import { Tag } from './Tag';

export default {
  title: 'Post/Tags',
  component: Tag,
};

export const Regular = (): React.SFC<unknown> => <Tag>photos</Tag>;

export const Featured = (): React.SFC<unknown> => <Tag type="featured">photos</Tag>;

export const TagBar = (): React.SFC<unknown> => (
  <>
    <Tag>photos</Tag>
    <Tag type="featured">hike</Tag>
    <Tag>travel</Tag>
  </>
);
