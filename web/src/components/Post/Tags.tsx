import React from 'react';
import { Tag } from './Tag';

type Tag = {
  title: string;
  type?: string;
};

type Props = { children: Tag[] };

export const Tags = ({ children }: Props): any => {
  if (children === null || children === undefined) {
    return null;
  }

  return children.map((tag: Tag) => (
    <Tag key={tag.title} type={tag.type ? tag.type : ''}>
      {tag.title}
    </Tag>
  ));
};
