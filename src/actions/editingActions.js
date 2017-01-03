export function addCompponent (componentId) { 
    return {
        type: 'ADD_COMPONENT', 
        componentId: componentId
    };
}

export function editComponent (componentId) { 
    return {
        type: 'EDIT_COMPONENT', 
        componentId: componentId
    };
}