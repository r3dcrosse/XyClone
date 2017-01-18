import { connect } from 'react-redux';
import { changePage } from '../../actions/EditingActions';
import { addPage } from '../../actions/ProjectActions';
import EditorPage from './EditorPage';

const mapStateToProps = (state) => {
	return {
		components: state.xyclone.components,
    currComponent: state.xyclone.currComponent,
    currComponentId: state.xyclone.currComponentId,
    currProject: state.xycloneProjects.currProject,
    currProjectId: state.xycloneProjects.currProjectId,
    currPage: state.xyclone.currPage,
    pages: state.xycloneProjects.pages
  }
}

const mapDispatchToProps = (dispatch) => {
	return {
    onChangePage: (newPage) => {
      dispatch(changePage(newPage));
    },
    onAddPage: (pageToAdd, currProjectId) => {
      dispatch(addPage(pageToAdd, currProjectId));
    }
	}
}

const EditorPageContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(EditorPage)

export default EditorPageContainer;
