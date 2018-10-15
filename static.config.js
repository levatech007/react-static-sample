
export default {
  getSiteData: () => ({
    title: 'React Static',
  }),
  getRoutes: async () => {
    const projects = [
      {
        id: 1,
        title: "Lorem ipsum 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nunc felis, bibendum ut molestie et, euismod mattis nulla. Praesent finibus ultricies ultricies."
      },
      {
        id: 2,
        title: "Lorem ipsum 2",
        description: "Duis molestie semper pretium. Donec in risus feugiat, sodales lacus eget, mollis dui. Nunc in ex in erat sagittis pellentesque quis iaculis purus."
      },
      {
        id: 3,
        title: "Lorem ipsum 3",
        description: "In hac habitasse platea dictumst. Mauris non varius nisi. Proin ultrices viverra mi non maximus. Sed ultricies urna sem, sit amet sodales leo tincidunt id. Nullam sollicitudin at sem eget tempor."
      },
      {
        id: 4,
        title: "Lorem ipsum 4",
        description: "Nullam iaculis ultricies erat vitae eleifend. Etiam at augue fringilla, ullamcorper eros nec, finibus est."
      },
      {
        id: 5,
        title: "Lorem ipsum 5",
        description: "Praesent pellentesque ornare feugiat. Duis augue tortor, vestibulum non pharetra eu, egestas egestas turpis. Aenean sed ligula odio."
      }
    ]

    return [
      {
        path: '/',
        component: 'src/containers/Home',
      },
      {
        path: '/about',
        component: 'src/containers/About',
      },
      {
        path: '/work',
        component: 'src/containers/Work',
        getData: () => ({
          projects,
        }),
        children: projects.map(project => ({
          path: `/project/${project.id}`,
          component: 'src/containers/Project',
          getData: () => ({
            project,
          }),
        })),
      },
      {
        is404: true,
        component: 'src/containers/404',
      },
    ]
  },
}
