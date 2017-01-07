import { connect } from 'react-redux'
import BuildSite from '../BuildSite'

const mapStateToProps = (state) => {
  return {
    components: state.xyclone.components,
    currComponent: state.xyclone.currComponent
  }
}

const BuildSiteContainer = connect(
  mapStateToProps
)(BuildSite)

export default BuildSiteContainer;