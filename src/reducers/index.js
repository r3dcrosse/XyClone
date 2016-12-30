import component from './editingReducer'

const todoApp = combineReducers({
  todos,
  visibilityFilter
})

export default todoApp