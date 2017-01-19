import { connect } from 'react-redux'
import { swapFlagToggle } from '../../../../actions/EditingActions'
import { storage } from '../../../../cache/ComponentCache'
import SwapComponents from '../SwapComponents'

const mapStateToProps = (state) => {
  return {
    components: state.xyclone.components,
    currComponent: state.xyclone.currComponent,
    currComponentId: state.xyclone.currComponentId,
    currProjectId: state.xycloneProjects.currProjectId
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleFlag: () => {
      dispatch(swapFlagToggle());
    }
  }
}

const SwapComponentsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SwapComponents)

export default SwapComponentsContainer;
