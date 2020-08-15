export default {
  name: 'siteSettings',
  type: 'document',
  title: 'Site Settings',
  icon: 'siteSettings.0.logo',
  __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'Describe your blog for search engines and social media.'
    },
    {
      name: 'keywords',
      type: 'array',
      title: 'Keywords',
      description: 'Add keywords that describes your blog.',
      of: [{type: 'string'}],
      options: {
        layout: 'tags'
      }
    },
    {
      name: 'author',
      type: 'reference',
      description: 'Publish an author and set a reference to them here.',
      title: 'Author',
      to: [{type: 'author'}]
    },
    {
      name: "logo",
      title: "Logo",
      description: "Site logo and favicon.",
      type: "image",
      options: {
        hotspot: true
      }
    }
  ]
}
