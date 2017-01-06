import { connect } from 'react-redux'
import { changeStyle, deleteComponent } from '../../actions/EditingActions'
import TextboxContext from '../../components/contextComponents/TextboxContext'


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
      dispatch(changeStyle(newProps, id));
    },
    deleteFocusedComponent: (id) => {
      dispatch(deleteComponent(id));
    }
  }
}

const TextboxContextContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TextboxContext)

export default TextboxContextContainer;