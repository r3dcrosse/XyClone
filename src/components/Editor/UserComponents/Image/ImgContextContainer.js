import { connect } from 'react-redux'
import { changeStyle, deleteComponent } from '../../../../actions/EditingActions'
import ImageContext from './ImgContext'

const mapStateToProps = (state) => {
  console.log('MAPPING TO EDITORCOMPONENTCONTAINERASDFASDFASDF', state)
  return {
    currComponent: state.xyclone.currComponent,
    currComponentId: state.xyclone.currComponentId
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeStyleClick: (newProps, id) => {
      dispatch(changeStyle(newProps, id))
    },
    deleteFocusedComponent: (id) => {
      dispatch(deleteComponent(id));
    }
  }
}

const ImageContextContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ImageContext)

export default ImageContextContainer;