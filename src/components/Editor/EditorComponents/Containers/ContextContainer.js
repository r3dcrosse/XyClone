import { connect } from 'react-redux'
import Context from '../Context'

const mapStateToProps = (state) => {
  return {
    currComponent: state.xyclone.currComponent,
    currComponentId: state.xyclone.currComponentId,
    currProjectId: state.xycloneProjects.currProjectId
  }
}

// const mapDispatchToProps = (dispatch) => {
// }x`

const ContextContainer = connect(
  mapStateToProps
  // ,
  // mapDispatchToProps
)(Context)

export default ContextContainer;