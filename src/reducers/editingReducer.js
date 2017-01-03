
import { _components, storage } from '../cache/componentCache';

const initialState = {
  components: []
}

export default function xyclone (state = initialState, action) {
    switch (action.type) {
        case 'REMOVE_COMPONENT':
            console.log('Im being notified of an action', state.components);
            console.log('action', action);
            return Object.assign({}, state, {
                components: [ ...state.components.slice(0, action.componentId),
                              ...state.components.slice(action.componentId + 1)
                            ]
            });
        case 'ADD_COMPONENT':
            let elem = action.componentId;
            let idInStorage = _components[elem]();
            return Object.assign({}, state, {
                // store the component skeletons on the window for now,
                // potentially they can be migrated to redis or even
                // stored directly on the state tree
                components: [...state.components, {componentId: idInStorage, type: action.componentId}]
            });
        default:
            return state
    }
}
