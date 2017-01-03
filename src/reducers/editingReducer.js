
import { _components, storage } from '../cache/componentCache';

const initialState = {
  components: [],
  currComponentId: null
}

export default function xyclone (state = initialState, action) {
	console.log(action.type, 'RUNNING THROUGH STATE WITH TIHS ACTION');
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

			console.log('ADDING COMPONENT', elem);
			let elem = action.componentType;
			let idInStorage = _components[elem]();
			return Object.assign({}, state, {
				components: [...state.components, {componentId: idInStorage, type: action.componentType}]
			});
		case 'EDIT_COMPONENT':
			console.log('IN EDIT COMPONENT SWITCH', action.componentId)
			return Object.assign({}, state, {
				currComponentId: action.componentId
			})
		default:
			return state
	}
}
