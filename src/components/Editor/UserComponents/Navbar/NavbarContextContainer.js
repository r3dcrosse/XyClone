import { connect } from 'react-redux'
import { changeStyle, deleteComponent } from '../../../../actions/EditingActions'
import NavbarContext from './NavbarContext'


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
    deleteFocusedComponent: (id) => {
      dispatch(deleteComponent(id));
    }
  }
}

const NavbarContextContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NavbarContext)

export default NavbarContextContainer;