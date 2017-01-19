import Navbar from './Navbar';
import { connect } from 'react-redux'
import { swapComponents } from '../../../../actions/EditingActions'

const mapStateToProps = (state) => {
  return {
    currComponentId: state.xyclone.currComponentId,
    swapFlag: state.xyclone.swapFlag,
    currProjectId: state.xycloneProjects.currProjectId,
    components: state.xyclone.components,
    currProject: state.xycloneProjects.currProject,
    loginStatus: state.xycloneLogin.loginStatus
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    swapComponents: (idToSwap, projectId) => {
      dispatch(swapComponents(idToSwap, projectId));
    }
  }
}
const NavbarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar)

export default NavbarContainer;