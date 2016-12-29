// RENAME THIS FILE AS YOU SEE FIT

// THIS IS ALL FOR TESTING PURPOSES


// ACTION TYPES //////////////////////////////////////////

export const ADD_TODO = 'ADD_TODO';

export function addTodo(text) {
  return { type: ADD_TODO, text }
}