export function addProject (title, description, imgUrl, projectId) {
  return {
    type: 'ADD_PROJECT',
    title: title,
    description: description,
    imgUrl: imgUrl,
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

export function updateOneProject (projectId, title, description, imgUrl) {
  return {
    type: 'UPDATE_ONE_PROJECT',
    projectId: projectId,
    title: title,
    description: description,
    imgUrl: imgUrl
  }
}