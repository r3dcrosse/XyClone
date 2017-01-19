import { connect } from 'react-redux'
import { editComponent, swapComponents } from '../../../../actions/EditingActions'
import { storage } from '../../../../cache/ComponentCache'
import UserContainer from './UserContainer'


const mapStateToProps = (state) => {
  return {
    components: state.xyclone.components,
    currComponent: state.xyclone.currComponent,
    currComponentId: state.xyclone.currComponentId,
    currProjectId: state.xycloneProjects.currProjectId,
    currProject: state.xycloneProjects.currProject,
    loginStatus: state.xycloneLogin.loginStatus,
    swapFlag: state.xyclone.swapFlag
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onEditorChildClick: (id) => {
      let component = storage[id];
      dispatch(editComponent(component, id))
    },
    swapComponents: (idToSwap, projectId) => {
      dispatch(swapComponents(idToSwap, projectId));
    }
  }
}



const UserContainerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserContainer)

// const EditorContainer = connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(Editor)

export default UserContainerContainer;