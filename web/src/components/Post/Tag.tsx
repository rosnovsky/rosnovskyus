import React from 'react';

interface TagProps {
  children: string;
  type?: string;
}

export const Tag = ({ children, type = 'regular' }: TagProps): JSX.Element => {
  console.log(children);
  if (type === 'featured') {
    return (
      <span className="inline-block bg-orange-700 rounded px-3 py-1 text-sm text-white mr-2 hover:bg-orange-800 hover:text-red-100 cursor-pointer">
        {children}
      </span>
    );
  }

  return (
    <span className="inline-block bg-gray-200 rounded px-3 py-1 text-sm text-teal-900 mr-2 hover:bg-gray-300 hover:text-teal-900 cursor-pointer">
      {children}
    </span>
  );
};
