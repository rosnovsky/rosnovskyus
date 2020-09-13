import { CgList } from 'react-icons/cg'

export default {
  name: 'postType',
  title: 'Post Type',
  type: 'document',
  icon: CgList,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 30
      }
    },
    {
      name: 'icon',
      title: 'Icon',
      type: 'image',
    },
  ],
  preview: {
    select: {
      title: 'name',
      slug: 'slug.current',
      media: 'icon'
    },
    prepare(selection) {
      const {slug} = selection
      return Object.assign({}, selection, {
        subtitle: `/${slug}`,
      })
    }
  },
}
