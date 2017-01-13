import { connect } from 'react-redux'
import { changeStyle, deleteComponent } from '../../../../actions/EditingActions'
import GalleryPostContext from './GalleryPostContext'

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
    deleteFocusedComponent: (type, id) => {
      dispatch(deleteComponent(type, id));
    }
  }
}

const GalleryPostContextContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GalleryPostContext)

export default GalleryPostContextContainer;