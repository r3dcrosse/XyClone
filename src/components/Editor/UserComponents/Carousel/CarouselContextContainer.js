import { connect } from 'react-redux'
import { changeStyle, deleteComponent, addInChildren } from '../../../../actions/EditingActions'
import CarouselContext from './CarouselContext'

const mapStateToProps = (state) => {
  console.log('MAPPING TO EDITORCOMPONENTCONTAINERASDFASDFASDF', state)
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
    onEditorComponentSidebarClick: (type, componentId, project, userId) => {
      console.log('DISPATCHING ON COMPONENT CLICK')
      dispatch(addInChildren(type, componentId, project, userId))
    },
    deleteFocusedComponent: (id, component) => {
      dispatch(deleteComponent(id, component));
    }
  }
}

const CarouselContextContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CarouselContext)

export default CarouselContextContainer;