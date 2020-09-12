import React from 'react';

export const PostHeading = ({ title, type }: any): JSX.Element => {
  return type === 'featured' ? (
    <h2 className="text-6xl font-bold text-red-900">{title}</h2>
  ) : (
    <h2 className="text-4xl font-semibold">{title}</h2>
  );
};
