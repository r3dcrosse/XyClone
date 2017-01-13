export function addComponent (componentType, project, userId) {
  return {
    type: 'ADD_COMPONENT',
    componentType: componentType,
    project: project,
    userId: userId
  };
}
export function editComponent (component, componentId) {
  return {
    type: 'EDIT_COMPONENT',
    component: component,
    componentId: componentId
  };
}

export function deleteComponent (componentId) {
  return {
    type: 'DELETE_COMPONENT',
    componentId: componentId
  }
}

export function changeStyle (newProps, componentId, currProject, userId) {
  return {
    type: 'CHANGE_STYLE',
    newProps: newProps,
    componentId: componentId,
    currProject: currProject,
    userId: userId
  };
}

export function addInChildren (componentType, componentId, project, userId) {
  return {
    type: 'ADD_CHILDREN',
    componentType: componentType,
    componentId: componentId,
    project: project,
    userId: userId
  }
}

export function editBodyClick (projectId) {
  return {
    type: 'EDIT_BODY_CLICK',
    projectId: projectId
  }
}

export function changeBodyProps (newProps) {
  return {
    type: 'CHANGE_BODY_PROPS',
    newProps: newProps,
    projectId: projectId
  }
}

export function updateStorageAndStateComponents (components) {
  return {
    type: 'UPDATE_STORAGE_COMPONENTS',
    components: components
  }
}
