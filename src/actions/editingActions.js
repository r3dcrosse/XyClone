export function addComponent (componentType) {
    return {
        type: 'ADD_COMPONENT',
        componentType: componentType
    };
}

export function editComponent (componentId) {
    return {
        type: 'EDIT_COMPONENT',
        componentId: componentId
    };
}



// export const removeComponent = (componentId) =>
//     ({type: 'REMOVE_COMPONENT', componentId: componentId})

// export const addComponent = (componentType) =>
//     ({type: 'ADD_COMPONENT', componentType: componentType})

// export const editComponent = (componentId) =>
//     ({type: 'EDIT_COMPONENT', componentId: componentId})
