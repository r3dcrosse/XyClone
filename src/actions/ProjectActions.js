export function addProject (title, description, projectId) {
  return {
    type: 'ADD_PROJECT',
    title: title,
    description: description,
    projectId: projectId
  }
};

export function changeCurrProject (projectId) {
  return {
    type: 'CHANGE_CURR_PROJECT',
    projectId: projectId
  }
};

export function updateProjectsStorage (projects) {
  return {
    type: 'UPDATE_PROJECTS',
    projects: projects
  }
};

export function deleteProject (projectId) {
  return {
    type: 'DELETE_PROJECT',
    deletedProjectId: projectId
  }
};

export function addPage (newPage, projectId) {
  console.log('GOT HERE!!!! ADDING A NEW PAGE!!!!!');
  return {
    type: 'ADD_PAGE',
    pageToAdd: newPage,
    projectId: projectId
  }
};
