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
    onChangeStyleClick: (newProps, id, currProject, page, userId) => {
      dispatch(changeStyle(newProps, id, currProject, page, userId))
    },
    onEditorComponentSidebarClick: (type, componentId, project) => {
      console.log('DISPATCHING ON COMPONENT CLICK')
      dispatch(addInChildren(type, componentId, project))
    },
    deleteFocusedComponent: (id) => {
      dispatch(deleteComponent(id));
    }
  }
}

const UserContainerContextContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserContainerContext)

export default UserContainerContextContainer;