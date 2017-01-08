import { connect } from 'react-redux'
import BodyContext from './BodyContext'
import { changeBodyProps } from '../../../../actions/EditingActions'
import { storage } from '../../../../cache/ComponentCache'

const mapStateToProps = (state) => {
  console.log('MAPPING THE STATE TO BODYCONTEXT', state);
  return {
    currComponent: state.xyclone.currComponent,
    currComponentId: state.xyclone.currComponentId,
    style: storage['body'].css
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    editBodyProps: (newProps) => {
      dispatch(changeBodyProps(newProps));
    }
  }
}

const BodyContextContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BodyContext)

export default BodyContextContainer;