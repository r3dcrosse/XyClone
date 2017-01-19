import Textbox from './Textbox';
import { connect } from 'react-redux'
import { swapComponents } from '../../../../actions/EditingActions'

const mapStateToProps = (state) => {
  return {
    components: state.xyclone.components,
    currComponentId: state.xyclone.currComponentId,
    swapFlag: state.xyclone.swapFlag,
    currProjectId: state.xycloneProjects.currProjectId,
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
const TextboxContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Textbox)

export default TextboxContainer;