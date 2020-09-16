import clientConfig from '../../client-config';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(clientConfig.sanity);

export function imageUrlFor(source: string) {
  return builder.image(source);
}
