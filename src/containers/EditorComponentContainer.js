import { connect } from 'react-redux'
import EditorComponent from '../components/EditorComponent'

const mapStateToProps = (state) => {
  console.log('MAPPING TO EDITORCOMPONENTCONTAINERASDFASDFASDF', state)
  return {
    currComponent: state.xyclone.currComponent,
    currComponentId: state.xyclone.currComponentId
  }
}

// const mapDispatchToProps = (dispatch) => {
// }x`

const EditorComponentContainer = connect(
  mapStateToProps
  // ,
  // mapDispatchToProps
)(EditorComponent)

export default EditorComponentContainer;