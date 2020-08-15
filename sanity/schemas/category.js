export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
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
      name: 'description',
      title: 'Description',
      type: 'text'
    },
    {
      name: 'categoryImage',
      title: 'Category image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
      media: 'categoryImage'
    },
  }
}
