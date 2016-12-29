// RENAME THIS FILE AS YOU SEE FIT

// THIS IS ALL FOR TESTING PURPOSES

import '../actions/incrementAction'

const initialState = {
  todos: []
}

export function todoApp(state = initialState, action) {
  switch(action.type) {
    case "ADD_TODO":
      return Object.assign({}, state, {
        todos: [
          ...state.todos,
          {
            text: action.text,
            completed: false
          }
        ]
      })
    default:
      return state
  }
}

