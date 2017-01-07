import { connect } from 'react-redux'
import { removeComponent, addComponent } from '../../../../actions/EditingActions'
import Sidebar from '../Sidebar'

const mapStateToProps = (state) => {
    return {
        components: state.xyclone.components
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSidebarClick: (type) => {
            console.log('DISPATCHING ON COMPONENT CLICK')
            dispatch(addComponent(type))
        }
    }
}

const SidebarContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Sidebar)

export default SidebarContainer;