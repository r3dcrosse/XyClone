
const initialState = {
  projects: [
    {
      name: 'Doge Project Ever',
      description: 'Best Doge Ever...',
      projectId: 0
    },
    {
      name: 'Doge Project Ever 2',
      description: ' 2 Best Doge Ever...',
      projectId: 1
    }
  ],
  currProject: {},
  currProjectId: null
}

export default function xycloneProjects (state = initialState, action) {
  switch (action.type) {
    case 'ADD_PROJECT':
      // Update project database with new project and description
      return Object.assign({}, state, {
        projects: [...state.projects, {
          name: action.name,
          description: action.description,
          projectId: action.projectId
        }]
      });
    case 'CHANGE_CURR_PROJECT':
      var project = state.projects.filter(
        (project) => {
          return project.projectId === action.projectId;
        }
      )[0];
      console.log('%%%%%', project);
      return Object.assign({}, state, {
        currProject: project,
        currProjectId: action.projectId
      });
    default:
      return state;
  }
}
