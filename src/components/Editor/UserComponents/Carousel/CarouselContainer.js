import { connect } from 'react-redux'
import { editComponent, swapComponents } from '../../../../actions/EditingActions'
import { storage } from '../../../../cache/ComponentCache'
import Carousel from './Carousel'


const mapStateToProps = (state) => {
  return {
    components: state.xyclone.components,
    currComponent: state.xyclone.currComponent,
    currComponentId: state.xyclone.currComponentId,
    currProjectId: state.xycloneProjects.currProjectId,
    swapFlag: state.xyclone.swapFlag,
    currProject: state.xycloneProjects.currProject
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onEditorChildClick: (id) => {
      console.log('ON EDITOR CHILD CLICK ', id);
      let component = storage[id];
      dispatch(editComponent(component, id))
    },
    swapComponents: (idToSwap, projectId) => {
      dispatch(swapComponents(idToSwap, projectId));
    }
  }
}



const CarouselContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Carousel)

export default CarouselContainer;