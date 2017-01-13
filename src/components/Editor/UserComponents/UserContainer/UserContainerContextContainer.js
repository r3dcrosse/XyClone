import { connect } from 'react-redux'
import { changeStyle, addInChildren, deleteComponent } from '../../../../actions/EditingActions'
import UserContainerContext from './UserContainerContext'


const mapStateToProps = (state) => {
  console.log('MAPPING TO EDITORCOMPONENTCONTAINERASDFASDFASDF', state)
  return {
    currComponent: state.xyclone.currComponent,
    currComponentId: state.xyclone.currComponentId,
    currProject: state.xycloneProjects.currProject,
    loginStatus: state.xycloneLogin.loginStatus
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeStyleClick: (newProps, id, component) => {
      dispatch(changeStyle(newProps, id, component))
    },
    onEditorComponentSidebarClick: (type, componentId, project) => {
      console.log('DISPATCHING ON COMPONENT CLICK')
      dispatch(addInChildren(type, componentId, project))
    },
    deleteFocusedComponent: (id, component) => {
      dispatch(deleteComponent(id, component));
    }
  }
}

const UserContainerContextContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserContainerContext)

export default UserContainerContextContainer;