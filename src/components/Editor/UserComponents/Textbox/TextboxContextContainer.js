import { connect } from 'react-redux'
import { changeStyle, deleteComponent } from '../../../../actions/EditingActions'
import TextboxContext from './TextboxContext'


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
      dispatch(changeStyle(newProps, id, component));
    },
    deleteFocusedComponent: (id, component) => {
      dispatch(deleteComponent(id, component));
    }
  }
}

const TextboxContextContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TextboxContext)

export default TextboxContextContainer;