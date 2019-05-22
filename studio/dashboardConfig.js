export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ce5996e29d11a7d8af2662c',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-t8kfmpap',
                  apiId: '46812755-904a-4b4a-b9ff-652d24b4933f'
                },
                {
                  buildHookId: '5ce5996e29d11aa1f5f26619',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-6kamy2iv',
                  apiId: '58d36fb2-677c-482b-bfcb-c2c6576b9fdc'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rwschmitz/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-portfolio-web-6kamy2iv.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
