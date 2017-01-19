import { connect } from 'react-redux'
import { changeStyle, deleteComponent } from '../../../../actions/EditingActions'
import ImageContext from './ImgContext'

const mapStateToProps = (state) => {
  return {
    components: state.xyclone.components,
    currComponent: state.xyclone.currComponent,
    currComponentId: state.xyclone.currComponentId,
    currProject: state.xycloneProjects.currProject,
    loginStatus: state.xycloneLogin.loginStatus
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeStyleClick: (newProps, id, component) => {
      dispatch(changeStyle(newProps, id, component))
    },
    deleteFocusedComponent: (id, component) => {
      dispatch(deleteComponent(id, component));
    }
  }
}

const ImageContextContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ImageContext)

export default ImageContextContainer;