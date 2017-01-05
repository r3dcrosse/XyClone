import { connect } from 'react-redux'
import { changeStyle } from '../actions/editingActions'
import NavbarContext from '../contextComponents/navbarContext'

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
    }
  }
}

const NavbarContextContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NavbarContext)

export default NavbarContextContainer;