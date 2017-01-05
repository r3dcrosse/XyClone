
import { _components, storage } from '../cache/componentCache';

const initialState = {
  components: [],
  currComponent: null,
  currComponentId: null
}


export default function xyclone (state = initialState, action) {
	let elem;
	let idInStorage;
	switch (action.type) {
		case 'REMOVE_COMPONENT':
			// return Object.assign({}, state, {
			// 	components: [ ...state.components.slice(0, action.componentId),
			// 				  ...state.components.slice(action.componentId + 1)
			// 				]
			// });
		case 'ADD_COMPONENT':
			elem = action.componentType;
			idInStorage = _components[elem]();
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
		case 'ADD_CHILDREN':
			console.log('ADDING A CHILD INTO', action.componentId);
			elem = action.componentType;
			let newObjectId = _components[elem]();
			storage[newObjectId].child = true;
			storage[action.componentId].children.push(newObjectId);
			// let currComponentState = state.currComponent
			// let currComponentChildrenState = state.currComponent.children;
			// console.log(storage[action.componentId], 'THIS IS WHAT IM TRYIGN TO COPY/CHANGE INTO NEW');
			// storage[action.componentId].children = storage[action.componentId].children.concat([newObjectId]);
			// console.log(storage[action.componentId], 'SHOUDL HAVE CHANGES');
			return Object.assign({}, state, {
				// components: [...state.components, {componentId: newObjectId, type: action.componentType}],
				currComponent: {
					...state.currComponent,
					children: [...state.currComponent.children, newObjectId]
				}
			})
		default:
			return state
	}
}
