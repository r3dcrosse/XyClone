import { connect } from 'react-redux'
import { editComponent } from '../../../../actions/EditingActions'
import { storage } from '../../../../cache/ComponentCache'
import GalleryPost from './GalleryPost'


const mapStateToProps = (state) => {
  return {
    currComponentId: state.xyclone.currComponentId,
    currProjectId: state.xycloneProjects.currProjectId,
    swapFlag: state.xyclone.swapFlag
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    swapComponents: (idToSwap, projectId) => {
      dispatch(swapComponents(idToSwap, projectId));
    }
  }
}
const GalleryPostContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GalleryPost)

export default GalleryPostContainer;