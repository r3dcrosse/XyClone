
import { _components, storage } from '../cache/componentCache';

const initialState = {
  components: [],
  currComponent: null,
  currComponentId: null,
}

export default function xyclone (state = initialState, action) {
	switch (action.type) {
		case 'REMOVE_COMPONENT':
			return Object.assign({}, state, {
				components: [ ...state.components.slice(0, action.componentId),
							  ...state.components.slice(action.componentId + 1)
							]
			});
		case 'ADD_COMPONENT':
			let elem = action.componentType;
			let idInStorage = _components[elem]();
			return Object.assign({}, state, {
				components: [...state.components, {componentId: idInStorage, type: action.componentType}]
			});
		case 'EDIT_COMPONENT':
			console.log('IN EDIT COMPONENT SWITCH', action.component)
			return Object.assign({}, state, {
				currComponent: action.component,
				currComponentId: action.componentId
			})
		case 'CHANGE_STYLE':
			console.log('THIS IS ACTION', action);
			storage[action.componentId] = action.newProps;
			return Object.assign({}, state, {
				currComponent: storage[action.componentId]
			})
		default:
			return state
	}
}
