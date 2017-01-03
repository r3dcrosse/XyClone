import { connect } from 'react-redux'
import { removeComponent, addComponent } from '../actions/editingActions'
import Editor from '../components/Editor'

const mapStateToProps = (state) => {
    return {
        components: state.components
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

const EditorContainer = connect(
    mapStateToProps
    // ,
    // mapDispatchToProps
)(Editor)

export default EditorContainer