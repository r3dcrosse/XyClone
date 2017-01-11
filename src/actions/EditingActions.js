export function addComponent (componentType) {
  return {
    type: 'ADD_COMPONENT',
    componentType: componentType
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

export function changeStyle (newProps, componentId) {
  return {
    type: 'CHANGE_STYLE',
    newProps: newProps,
    componentId: componentId
  };
}

export function addInChildren (componentType, componentId) {
  return {
    type: 'ADD_CHILDREN',
    componentType: componentType,
    componentId: componentId
  }
}

export function editBodyClick () {
  return {
    type: 'EDIT_BODY_CLICK'
  }
}

export function changeBodyProps (newProps) {
  return {
    type: 'CHANGE_BODY_PROPS',
    newProps: newProps
  }
}
