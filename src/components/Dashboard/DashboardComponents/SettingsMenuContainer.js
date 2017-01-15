import { connect } from 'react-redux';
import { deleteProject } from '../../../actions/ProjectActions';
import SettingsMenu from './SettingsMenu';

const mapDispatchToProps = (dispatch) => {
  return {
    deleteProjectById: (id) => {
      dispatch(deleteProject(id));
    }
  }
}

const SettingsMenuContainer = connect(
  null,
  mapDispatchToProps
)(SettingsMenu);

export default SettingsMenuContainer;
