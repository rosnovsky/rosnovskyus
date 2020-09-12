declare module '@sanity/block-content-to-react';

type Tag = {
  title: string;
  type?: string;
};

type Props = { children: Tag[] };

// type node = {
//   _rawBody: Record<string, unknown>[]
//   authors: Record<string, unknown>[]
//   categories: Record<string, unknown>[]
//   title: string
//   mainImage: Record<string, unknown>
//   publishedAt: string
// }
