export const removeComponent = (componentId) => 
    ({type: 'REMOVE_COMPONENT', componentId: componentId})

export const addComponent = (componentId) => 
    ({type: 'ADD_COMPONENT', componentId: componentId})