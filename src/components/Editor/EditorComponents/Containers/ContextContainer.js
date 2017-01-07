import { connect } from 'react-redux'
import Context from '../Context'

const mapStateToProps = (state) => {
  console.log('MAPPING TO ContextCONTAINERASDFASDFASDF', state)
  return {
    currComponent: state.xyclone.currComponent,
    currComponentId: state.xyclone.currComponentId
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