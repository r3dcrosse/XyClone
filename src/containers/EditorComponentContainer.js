import { connect } from 'react-redux'
import { changeStyle } from '../actions/editingActions'
import EditorComponent from '../components/editorComponent'

const mapStateToProps = (state) => {
  console.log('MAPPING TO EDITORCOMPONENTCONTAINERASDFASDFASDF', state)
  return {
    currComponent: state.xyclone.currComponent,
    currComponentId: state.xyclone.currComponentId
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeStyleClick: (newProps, id) => {
      dispatch(changeStyle(newProps, id))
    }
  }
}

const EditorComponentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditorComponent)

export default EditorComponentContainer;