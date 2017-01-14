import { connect } from 'react-redux'
import BuildSite from '../BuildSite'

const mapStateToProps = (state) => {
  return {
    components: state.xyclone.components,
    userId: state.xycloneLogin.loginStatus.id,
    currComponentId: state.xyclone.currComponentId,
    currProjectId: state.xycloneProjects.currProjectId,
    currProject: state.xycloneProjects.currProject
  }
}

const BuildSiteContainer = connect(
  mapStateToProps,
  null
)(BuildSite)

export default BuildSiteContainer;
