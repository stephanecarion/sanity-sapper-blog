export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '60158d1e7e8812c063967c08',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-xnc3zgt1',
                  apiId: 'acc9ef38-611c-4b82-aba3-61ec6b74486b'
                },
                {
                  buildHookId: '60158d1e0d9f5174d7aa2822',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-fmn5rgm8',
                  apiId: 'a1f565aa-837f-409e-92a2-e88dde48eb1f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/stephanecarion/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-fmn5rgm8.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
