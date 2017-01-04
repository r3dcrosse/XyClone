import { connect } from 'react-redux'
import { removeComponent, addComponent, editComponent } from '../actions/editingActions'
import { storage } from '../cache/componentCache'
import Editor from '../components/editor'

const mapStateToProps = (state) => {
	return {
		components: state.xyclone.components,
    currComponent: state.xyclone.currComponent,
    currComponentId: state.xyclone.currComponentId
  }
}

const mapDispatchToProps = (dispatch) => {
	return {
		onEditorClick: (id) => {
			console.log('DISPATCHING ON EDITOR CLICK with ID OF ', id);
			let component = storage[id];
			dispatch(editComponent(component, id))
		}
	}
}



const EditorContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Editor)

// const EditorContainer = connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(Editor)

export default EditorContainer;