import { connect } from 'react-redux'
import { addComponent, editComponent, deleteComponent, editBodyClick } from '../../../../actions/EditingActions'
import { storage } from '../../../../cache/ComponentCache'
import Editor from '../Editor'

const mapStateToProps = (state) => {
  console.log('MAPPING STATE TO PROPS FOR EDITOR', state)
	return {
		components: state.xyclone.components,
    currComponent: state.xyclone.currComponent,
    currComponentId: state.xyclone.currComponentId,
    style: storage['body'].css
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
    },
    onEditorBodyClick: (props) => {
      dispatch(editBodyClick());
    }
	}
}

const EditorContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Editor)

export default EditorContainer;