import { connect } from 'react-redux'
import { changeStyle, addInChildren, deleteComponent } from '../../../../actions/EditingActions'
import UserContainerContext from './UserContainerContext'


const mapStateToProps = (state) => {
  return {
    components: state.xyclone.components,
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
    onEditorComponentSidebarClick: (type, componentId, project, userId) => {
      dispatch(addInChildren(type, componentId, project, userId))
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