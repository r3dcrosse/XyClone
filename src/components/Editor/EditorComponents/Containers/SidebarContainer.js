import { connect } from 'react-redux'
import { removeComponent, addComponent } from '../../../../actions/EditingActions'
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
            console.log('DISPATCHING ON COMPONENT CLICK')
            dispatch(addComponent(type, project, userId))
        }
    }
}

const SidebarContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Sidebar)

export default SidebarContainer;
