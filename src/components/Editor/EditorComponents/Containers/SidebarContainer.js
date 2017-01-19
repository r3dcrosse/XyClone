import { connect } from 'react-redux'
import { addComponent, updateStorageAndStateComponents, editBodyClick } from '../../../../actions/EditingActions'
import Sidebar from '../Sidebar'

const mapStateToProps = (state) => {
    return {
        components: state.xyclone.components,
        currProject: state.xycloneProjects.currProject,
        loginStatus: state.xycloneLogin.loginStatus
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSidebarClick: (type, project, userId) => {
            dispatch(addComponent(type, project, userId));
        },
        updateStorageAndStateComponents: (components) => {
          dispatch(updateStorageAndStateComponents(components));
        },
        editBodyClick: (id) => {
            dispatch(editBodyClick(id));
        }
    }
}

const SidebarContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Sidebar)

export default SidebarContainer;
