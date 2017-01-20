export function addComponent (componentType, project, userId, page) {
  return {
    type: 'ADD_COMPONENT',
    componentType: componentType,
    project: project,
    userId: userId,
    page: page
  };
}

export function editComponent (component, componentId) {
  return {
    type: 'EDIT_COMPONENT',
    component: component,
    componentId: componentId
  };
}
export function deleteComponent (componentId, component) {
  return {
    type: 'DELETE_COMPONENT',
    componentId: componentId,
    component: component
  }
}
export function changeStyle (newProps, componentId, component) {
  return {
    type: 'CHANGE_STYLE',
    newProps: newProps,
    componentId: componentId,
    component: component
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

export function changeBodyProps (newProps, projectId) {
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

export function swapFlagToggle () {
  return {
    type: 'TOGGLE_SWAP_FLAG'
  }
}

export function swapComponents (idToSwap, projectId) {
  return {
    type: 'SWAP_COMPONENTS',
    idToSwap: idToSwap,
    projectId: projectId
  }
}
