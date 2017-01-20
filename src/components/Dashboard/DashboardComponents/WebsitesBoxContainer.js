import { connect } from 'react-redux';
import { editBodyClick } from '../../../actions/EditingActions';
import { changeCurrProject } from '../../../actions/ProjectActions';
import WebsitesBox from './WebsitesBox';

const mapStateToProps = (state) => {
  return {
    projects: state.xycloneProjects.projects
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeCurrProject: (id) => {
      dispatch(changeCurrProject(id));
    },
    editBodyClick: (id) => {
      dispatch(editBodyClick(id));
    }
    // updateProjectSummary: (title, description, imgUrl, projectId) => {
    //   dispatch(updateProjectSummary(title, description, imgUrl, projectId));
    // }
  }
}

const WebsitesBoxContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(WebsitesBox);

export default WebsitesBoxContainer;
