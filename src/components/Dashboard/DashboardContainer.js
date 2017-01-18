import { connect } from 'react-redux';
import { updateStorageAndStateComponents } from '../../actions/EditingActions'
import { addProject, updateProjectsStorage } from '../../actions/ProjectActions';
import Dashboard from './Dashboard';
updateStorageAndStateComponents
const mapStateToProps = (state) => {
  return {
    projects: state.xycloneProjects.projects,
    loginStatus: state.xycloneLogin.loginStatus
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addNewProject: (title, description, imgUrl, projectId) => {
      dispatch(addProject(title, description, imgUrl, projectId));
    },
    deleteProjectById: (projectId) => {
      dispatch(deleteProject(projectId));
    },
    updateStorageComponents(allComponents) {
      dispatch(updateStorageAndStateComponents(allComponents))
    },
    updateProjectsStorage(allProjects) {
      dispatch(updateProjectsStorage(allProjects));
    }
  }
}

const DashboardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);

export default DashboardContainer;


          // this.props.updateStorageComponents(allComponents);
          // this.props.updateProjectsStorage(allProjects);