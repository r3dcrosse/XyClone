import { connect } from 'react-redux'
import { editComponent } from '../../../../actions/EditingActions'
import { storage } from '../../../../cache/ComponentCache'
import GalleryPost from './GalleryPost'


const mapStateToProps = (state) => {
  return {
    currComponentId: state.xyclone.currComponentId
  }
}

const GalleryPostContainer = connect(
  mapStateToProps,
  null
)(GalleryPost)

export default GalleryPostContainer;