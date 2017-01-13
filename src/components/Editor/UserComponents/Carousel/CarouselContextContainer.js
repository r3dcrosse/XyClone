import { connect } from 'react-redux'
import { changeStyle, deleteComponent, addInChildren } from '../../../../actions/EditingActions'
import CarouselContext from './CarouselContext'

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
    onEditorComponentSidebarClick: (type, componentId, project) => {
      console.log('DISPATCHING ON COMPONENT CLICK')
      dispatch(addInChildren(type, componentId, project))
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