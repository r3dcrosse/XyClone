import { connect } from 'react-redux';
import { addProject } from '../../actions/ProjectActions';
import Dashboard from './Dashboard';

const mapStateToProps = (state) => {
  return {
    projects: state.xycloneProjects.projects
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addNewProject: (name, description, projectId) => {
      dispatch(addProject(name, description, projectId));
    }
  }
}

const DashboardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);

export default DashboardContainer;
