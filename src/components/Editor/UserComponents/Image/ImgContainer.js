import ImageComponent from './Img';
import { connect } from 'react-redux'
import { swapComponents } from '../../../../actions/EditingActions'

const mapStateToProps = (state) => {
  return {
    currComponentId: state.xyclone.currComponentId,
    swapFlag: state.xyclone.swapFlag,
    currProjectId: state.xycloneProjects.currProjectId

  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    swapComponents: (idToSwap, projectId) => {
      dispatch(swapComponents(idToSwap, projectId));
    }
  }
}
const ImageComponentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ImageComponent)

export default ImageComponentContainer;