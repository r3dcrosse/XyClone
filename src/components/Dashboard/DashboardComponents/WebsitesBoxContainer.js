import { connect } from 'react-redux';
import { changeCurrProject } from '../../../actions/ProjectActions';
import WebsitesBox from './WebsitesBox';

const mapDispatchToProps = (dispatch) => {
  return {
    changeCurrProject: (id) => {
      dispatch(changeCurrProject(id));
    }
  }
}

const WebsitesBoxContainer = connect(
  null,
  mapDispatchToProps
)(WebsitesBox);

export default WebsitesBoxContainer;
