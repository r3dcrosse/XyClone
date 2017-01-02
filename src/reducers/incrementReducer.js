// RENAME THIS FILE AS YOU SEE FIT

// THIS IS ALL FOR TESTING PURPOSES

import '../actions/editingActions'

const initialState = {
  components: [{componentId: 'nav'}, {componentId: 'textbox'}]
}

export function component(state = initialState, action) {
  switch(action.type) {
    case 'REMOVE_COMPONENT':
            return Object.assign({}, state, {
                components: [ ...state.components.slice(0, action.componentId),
                              ...state.components.slice(action.componentId + 1)
                            ]
            })
    default:
      return state
  }
}

