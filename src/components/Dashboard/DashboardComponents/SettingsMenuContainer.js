import { connect } from 'react-redux';
import { deleteProject, updateOneProject } from '../../../actions/ProjectActions';
import SettingsMenu from './SettingsMenu';


const mapDispatchToProps = (dispatch) => {
  return {
    deleteProjectById: (id) => {
      dispatch(deleteProject(id));
    },
    updateOneProject: (projectId, title, description, imgUrl) => {
      dispatch(updateOneProject(projectId, title, description, imgUrl));
    }
  }
}

const SettingsMenuContainer = connect(
  null,
  mapDispatchToProps
)(SettingsMenu);

export default SettingsMenuContainer;
