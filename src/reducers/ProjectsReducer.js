
const initialState = {
  projects: [
    // {
    //   name: 'Doge Project Ever',
    //   description: 'Best Doge Ever...',
    //   projectId: 0
    // },
    // {
    //   name: 'Doge Project Ever 2',
    //   description: ' 2 Best Doge Ever...',
    //   projectId: 1
    // }
  ],
  currProject: {},
  currProjectId: null,
  pages: []
}

export default function xycloneProjects (state = initialState, action) {
  switch (action.type) {
    case 'ADD_PROJECT':
      // Update project database with new project and description
      console.log('GOT HERE!!!!!!!!');
      return Object.assign({}, state, {
        pages: [...state.pages, {
          projectId: action.projectId,
          page: 'IndexPage'
        }],
        projects: [...state.projects, {
          title: action.title,
          description: action.description,
          imgUrl: action.imgUrl,
          projectId: action.projectId
        }]
      });
    case 'CHANGE_CURR_PROJECT':
      var project = state.projects.filter(
        (project) => {
          return project.projectId === action.projectId;
        }
      )[0];
      return Object.assign({}, state, {
        currProject: project,
        currProjectId: action.projectId
      });
    case 'UPDATE_PROJECTS':
      return Object.assign({}, state, {
        projects: action.projects
      });
    case 'DELETE_PROJECT':
      // Delete project from storage and trigger a rerender of the projects
      var newProjectsArray = state.projects.filter(
        (project) => {
          return project.projectId !== action.deletedProjectId;
        }
      );
      return Object.assign({}, state, {
        projects: newProjectsArray
      });
    default:
      return state;
  }
}
