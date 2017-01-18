import { connect } from 'react-redux'
import { removeComponent, addComponent, updateStorageAndStateComponents } from '../../../../actions/EditingActions'
import Sidebar from '../Sidebar'

const mapStateToProps = (state) => {
    console.log('SIDEBAR CONTAINER MAPPING STATE TO PROPS');
    return {
        components: state.xyclone.components,
        currProject: state.xycloneProjects.currProject,
        loginStatus: state.xycloneLogin.loginStatus,
        currPage: state.xyclone.currPage,
        pages: state.xycloneProjects.pages
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSidebarClick: (type, project, userId, page) => {
            dispatch(addComponent(type, project, userId, page));
        },
        updateStorageAndStateComponents: (components) => {
          dispatch(updateStorageAndStateComponents(components));
        }
    }
}

[]
const SidebarContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Sidebar)

export default SidebarContainer;
