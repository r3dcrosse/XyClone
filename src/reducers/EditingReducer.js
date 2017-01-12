import { _components, storage } from '../cache/ComponentCache';

const initialState = {
  components: [],
  currComponent: null,
  currComponentId: null
}

// HELPER FUNCTION
let recurseDelete = (element) => {
	// console.log(element, 'RECURSEDELETE WITH ELEMENT');
	if (element.children.length > 0) {
		for (let i = 0; i < element.children.length; i++) {
			recurseDelete(storage[element.children[i].componentId]);
		}
	}
	element.children.length = 0;
}

export default function xyclone (state = initialState, action) {

	let elem;
	let idInStorage;
	let componentFromStorage;


	switch (action.type) {
		case 'ADD_COMPONENT':
			elem = action.componentType;
			let project = action.project;
			let page = action.page || null;
			let userId = action.userId || null;
			idInStorage = _components[elem](project, action, userId);
			return Object.assign({}, state, {
				components: [...state.components, {componentId: idInStorage, type: action.componentType}]
			});
		case 'EDIT_COMPONENT':
			// console.log('IN EDIT COMPONENT SWITCH', action.component)
			return Object.assign({}, state, {
				currComponent: action.component,
				currComponentId: action.componentId
			});
		case 'CHANGE_STYLE':
			storage[action.componentId] = action.newProps;
			return Object.assign({}, state, {
				currComponent: storage[action.componentId]
			});
		case 'ADD_CHILDREN':
			// console.log('ADDING A CHILD INTO', action.componentId);
			var parentEle = storage[action.componentId];
			elem = action.componentType;
			// console.log('THIS IS STORAGE BEFORE', storage);
			let newObjectId = _components[elem]();
			storage[newObjectId].parent = {componentId: action.componentId, type: parentEle.type};
			storage[action.componentId].children.push({componentId: newObjectId, type: action.componentType });
			// console.log('STORAGE HAS BEEN UPDATED WITH A NEW CHILD', storage);
			return Object.assign({}, state, {
				currComponent: {
					...state.currComponent,
					children: [...state.currComponent.children]
				}
			});
		case 'DELETE_COMPONENT':
			componentFromStorage = storage[action.componentId];
			// REFACTOR THIS PART TO BE MORE EFFICENT (OBJECT????)
			if (componentFromStorage.type === 'UserContainer' || componentFromStorage.type === 'GalleryPost' || componentFromStorage.type === 'Carousel') {
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
			});
		case 'EDIT_BODY_CLICK':
		  console.log(' SETTING FOCUS TO THE BODY');
			return Object.assign({}, state, {
				currComponent: storage['body'],
				currComponentId: 'body'
			});
		case 'CHANGE_BODY_PROPS':
			console.log(action.newProps, 'THIS IS THE NEW PROPERTIES OF THE AFSDFASDF');

			storage['body'].css = action.newProps;
			return Object.assign({}, state, {
				currComponent: storage['body']
			});
		default:
			return state
	}
}
