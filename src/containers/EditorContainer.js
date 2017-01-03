import { connect } from 'react-redux'
import { removeComponent, addComponent, editComponent } from '../actions/editingActions'
import Editor from '../components/Editor'

const mapStateToProps = (state) => {
	console.log('MAPPING COMPONENTS TO EDITORCONTAINER');
	return {
		components: state.xyclone.components
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onEditorClick: (id) => {
			console.log('DISPATCHING ON EDITOR CLICK with ID OF ', id);
			dispatch(editComponent(id))
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