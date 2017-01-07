import { connect } from 'react-redux'
import BuildSite from '../BuildSite'

const mapStateToProps = (state) => {
  return {
    components: state.xyclone.components
  }
}

const BuildSiteContainer = connect(
  mapStateToProps
)(BuildSite)

export default BuildSiteContainer;