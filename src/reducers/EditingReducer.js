import { _components, storage } from '../cache/ComponentCache';

const initialState = {
  components: [],
  currComponent: null,
  currComponentId: null
}


export default function xyclone (state = initialState, action) {
	let elem;
	let idInStorage;
	let componentFromStorage;
	let recurseDelete = (element) => {
		console.log(element, 'RECURSEDELETE WITH ELEMENT');
		if (element.children.length > 0) {
			for (let i = 0; i < element.children.length; i++) {
				recurseDelete(storage[element.children[i].componentId]);
			}
		}
		element.children.length = 0;
	}
	switch (action.type) {
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
			var parentEle = storage[action.componentId];
			elem = action.componentType;
			console.log('THIS IS STORAGE BEFORE', storage);
			let newObjectId = _components[elem]();
			storage[newObjectId].parent = {componentId: action.componentId, type: parentEle.type};
			storage[action.componentId].children.push({componentId: newObjectId, type: action.componentType });
			console.log('STORAGE HAS BEEN UPDATED WITH A NEW CHILD', storage);
			return Object.assign({}, state, {
				currComponent: {
					...state.currComponent,
					children: [...state.currComponent.children]
				}
			})
		case 'DELETE_COMPONENT':
			console.log('DELETING COMPONENT with action', action.componentId);
			componentFromStorage = storage[action.componentId];
			if (componentFromStorage.type === 'UserContainer') {
				recurseDelete(componentFromStorage);
			}
			if (Object.keys(componentFromStorage.parent).length !== 0) {
				storage[componentFromStorage.parent.componentId].children = storage[componentFromStorage.parent.componentId].children.filter((ref) => ref.componentId !== action.componentId);
			}
			delete storage[action.componentId];
			return Object.assign({}, state, {
				components: state.components.filter((ref) => ref.componentId !== action.componentId),
				currComponent: null,
				currComponentId: null
			})
		default:
			return state
	}
}
