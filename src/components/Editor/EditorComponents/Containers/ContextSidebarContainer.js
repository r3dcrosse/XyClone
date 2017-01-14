import { connect } from 'react-redux'
import ContextMenuSidebar from '../ContextMenuSidebar'

const mapStateToProps = (state) => {
  return {
    currComponent: state.xyclone.currComponent,
    currComponentId: state.xyclone.currComponentId,
    currProjectId: state.xycloneProjects.currProjectId
  }
};

// const mapDispatchToProps = (dispatch) => {
// }x`

const ContextMenuContainer = connect(
  mapStateToProps
  // ,
  // mapDispatchToProps
)(ContextMenuSidebar);

export default ContextMenuContainer;
