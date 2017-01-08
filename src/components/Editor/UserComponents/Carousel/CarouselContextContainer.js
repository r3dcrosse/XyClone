import { connect } from 'react-redux'
import { changeStyle, deleteComponent, addInChildren } from '../../../../actions/EditingActions'
import CarouselContext from './CarouselContext'

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
    onEditorComponentSidebarClick: (type, componentId) => {
      console.log('DISPATCHING ON COMPONENT CLICK')
      dispatch(addInChildren(type, componentId))
    },
    deleteFocusedComponent: (type, id) => {
      dispatch(deleteComponent(type, id));
    }
  }
}

const CarouselContextContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CarouselContext)

export default CarouselContextContainer;