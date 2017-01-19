import Textbox from './Textbox';
import { connect } from 'react-redux'
import { swapComponents } from '../../../../actions/EditingActions'
const mapStateToProps = (state) => {
  return {
    currComponentId: state.xyclone.currComponentId,
    swapFlag: state.xyclone.swapFlag,
    currPprojectId: state.xycloneProjects.currProjectId
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