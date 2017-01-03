import { connect } from 'react-redux'
import { removeComponent, addComponent } from '../actions/editingActions'
import EditorComponent from '../components/editorComponent'

const mapStateToProps = (state) => {
  console.log('MAPPING STATE for currentComponentId', state);
  return {
    currComponentId: state.xyclone.currComponentId
  }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         onComponentClick: (id) => {
//             console.log(id);
//             dispatch(addComponent(id))
//         }
//     }
// }

const EditorComponentContainer = connect(
  mapStateToProps
  // ,
  // mapDispatchToProps
)(EditorComponent)

export default EditorComponentContainer;