export function addProject (name, description, projectId) {
  return {
    type: 'ADD_PROJECT',
    name: name,
    description: description,
    projectId: projectId
  }
}

export function changeCurrProject (projectId) {
  return {
    type: 'CHANGE_CURR_PROJECT',
    projectId: projectId
  }
}
