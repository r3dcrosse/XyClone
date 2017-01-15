import { connect } from 'react-redux';
import { addProject } from '../../actions/ProjectActions';
import Dashboard from './Dashboard';

const mapStateToProps = (state) => {
  return {
    projects: state.xycloneProjects.projects,
    loginStatus: state.xycloneLogin.loginStatus
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addNewProject: (name, description, projectId) => {
      dispatch(addProject(name, description, projectId));
    },
    deleteProjectById: (projectId) => {
      dispatch(deleteProject(projectId));
    }
  }
}

const DashboardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);

export default DashboardContainer;
