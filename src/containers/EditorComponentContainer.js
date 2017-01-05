import { connect } from 'react-redux'
import EditorComponent from '../components/editorComponent'

const mapStateToProps = (state) => {
  console.log('MAPPING TO EDITORCOMPONENTCONTAINERASDFASDFASDF', state)
  return {
    currComponent: state.xyclone.currComponent,
    currComponentId: state.xyclone.currComponentId
  }
}

// const mapDispatchToProps = (dispatch) => {
// }

const EditorComponentContainer = connect(
  mapStateToProps
  // ,
  // mapDispatchToProps
)(EditorComponent)

export default EditorComponentContainer;