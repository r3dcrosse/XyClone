import { connect } from 'react-redux'
import { addComponent, editComponent, deleteComponent } from '../../../../actions/EditingActions'
import { storage } from '../../../../cache/ComponentCache'
import Editor from '../Editor'

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
		},
    deleteFocusedComponent: (id) => {
      dispatch(deleteComponent(id));
    }
	}
}

const EditorContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Editor)

export default EditorContainer;