
const initialState = {
  components: [{componentId: '0'}, {componentId: '1'}]
}

export function component (state = initialState, action) {
    switch (action.type) {
        case 'REMOVE_COMPONENT':
            console.log('Im being notified of an action', state.components);
            console.log('action', action);
            return Object.assign({}, state, {
                components: [ ...state.components.slice(0, action.componentId),
                              ...state.components.slice(action.componentId + 1)
                            ]
            })
        default:
            return state
    }
}
