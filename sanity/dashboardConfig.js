export default {
  widgets: [
    {
      name: 'project-users',
      title: 'Project Users',
      layout: {
        width: 'small',
        height: 'small'
      }
    },
    {
      name: 'document-list', 
      options: {
        title: 'Latest Posts', 
        order: '_updatedAt desc', 
        types: ['post'],
        layout: {
          width: 'large',
          height: 'small'
        }
      }
    },
    
    {
      name: 'project-info',
      __experimental_before: [
        {
          name: 'netlify',
          options: {
            description:
              'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
            sites: [
              {
                buildHookId: '5f34d7abce40a3e56c0f174d',
                title: 'Sanity Studio',
                name: 'sanity-gatsby-blog-studio-a6yhewv5',
                apiId: '39f58c52-5a99-4778-8173-17f073e95030'
              },
              {
                buildHookId: '5f34d7ab917532f584a4162b',
                title: 'Blog Website',
                name: 'sanity-gatsby-blog-web-qbf6wb6a',
                apiId: '0b14bec1-ff5f-42b3-a6fd-b7779368c019'
              }
            ]
          }
        }
      ],
      data: [
        {
          title: 'GitHub repo',
          value: 'https://github.com/rosnovsky/sanity-gatsby-blog',
          category: 'Code'
        },
        { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-qbf6wb6a.netlify.app', category: 'apps' }
      ]
    },
    {
      name: 'document-chart',
      title: "Ducuments",
      options: {types: ['post']},
      layout: {width: 'medium', height: 'small'}
    },
    
  ]
}
