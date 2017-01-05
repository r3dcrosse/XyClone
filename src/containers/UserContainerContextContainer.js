import { connect } from 'react-redux'
import { changeStyle, addInChildren } from '../actions/editingActions'
import UserContainerContext from '../contextComponents/userContainerContext'

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
    }
  }
}

const UserContainerContextContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserContainerContext)

export default UserContainerContextContainer;