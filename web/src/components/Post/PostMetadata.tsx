import React from 'react';

interface PostMetadataProp {
  metadata: {
    publishedAt: string;
  };
}

export const PostMetadata = ({ metadata }: PostMetadataProp): JSX.Element => {
  return (
    <div>
      <div>{metadata.publishedAt}</div>
    </div>
  );
};
