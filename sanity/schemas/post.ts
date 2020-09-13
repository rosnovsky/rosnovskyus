import {CgFileDocument} from 'react-icons/cg'

export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  icon: CgFileDocument,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'type',
      title: 'Post Type',
      type: 'reference',
      to: { type: 'postType'}
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'}
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}]
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime'
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent'
    }
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      description: 'type.name',
      media: 'mainImage'
    },
    prepare(selection) {
      const {author, description} = selection
      return Object.assign({}, selection, {
        subtitle: `${description} by ${author}`
      })
    }
  }
}
