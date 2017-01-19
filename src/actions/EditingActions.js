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
//NEED TO ADD A PROJECT ID
  };
}
//refactor deleteComponents!
export function deleteComponent (componentId, component) {
  return {
    type: 'DELETE_COMPONENT',
    componentId: componentId,
    component: component
// NEED TO ADD A PROJECT ID FOR THIS
  }
}
// REFACTOR CHANGE STYLE
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
// THIS IS WHAT IT IS CURRNETLY
// components of ALL PROJECTS CURRENTLY
// REDUX STATE
// [{componentId: type: projectId: 2}, {componentId: type: projectId: 4},{componentId: type: projectId:1},{componentId: type: projectId: 1},{componentId: type: projectId:}, {componentId: type: projectId:}]


// [{}]
// IF WE WANNA MAKE IT EASIER, MAKE A REFERENCE STOARGE. THIS IS WHAT WE WANT IT TO BE
// REDUX STATE
  // [{componentId: type: projectId: 2}, ... ];

// currCompoennts FROM ONE PROJECT ONLY
// [{componentId: type: projectId 1},{componentId: type: projectId 1},{componentId: type: projectId 1}]
// prevComponents for ONLY ONE PRPOJECT ID
// [{componentId: type: projectId 1},{componentId: type: projectId 1}]

// 1. LOGIN AND DASHBOARD BOTH NEED TO POPULATE COMPONENTREFERENCES INSIDE COMPONENTCACHE
// 2. UPDATE STATETREE COMPONENTS INSIDE XYCLONE WHENEVER A CURRPROJECT IS ASSIGNED
  // THIS WOULD BE INSIDE WEBSITE BOX. YOU WOULD NEED TO MAKE THE CHANGECURRPROJECT A PROMISE. THE RESOLVE WOULD BE UPDATESTORAGEANDSTATECOMPONENTS ACTION.
// 3.
