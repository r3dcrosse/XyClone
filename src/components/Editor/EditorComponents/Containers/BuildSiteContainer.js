import { connect } from 'react-redux'
import BuildSite from '../BuildSite'

const mapStateToProps = (state) => {
  console.log('MAPPING STATE TO BUILDSITECONTAINER======================================', state);
  return {
    components: state.xyclone.components,
    currUserId: state.xycloneLogin.loginStatus.id,
    currProjectId: state.xycloneProjects.projects.currProjectId

  }
}

const BuildSiteContainer = connect(
  mapStateToProps
)(BuildSite)

export default BuildSiteContainer;