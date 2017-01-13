import { connect } from 'react-redux'
import { addComponent, editComponent, deleteComponent, editBodyClick } from '../../../../actions/EditingActions'
import { storage } from '../../../../cache/ComponentCache'
import Editor from '../Editor'

const mapStateToProps = (state) => {
	return {
		components: state.xyclone.components,
    currComponent: state.xyclone.currComponent,
    currComponentId: state.xyclone.currComponentId,
    currProjectId: state.xycloneProjects.currProjectId
  }
}

const mapDispatchToProps = (dispatch) => {
	return {
		onEditorClick: (id) => {
			let component = storage[id];
			dispatch(editComponent(component, id))
		},
    deleteFocusedComponent: (id, projectId) => {
      dispatch(deleteComponent(id));
    },
    onEditorBodyClick: (projectId) => {
      dispatch(editBodyClick(projectId));
    }
	}
}

const EditorContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Editor)

export default EditorContainer;