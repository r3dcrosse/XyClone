import { connect } from 'react-redux'
import { removeComponent, addComponent } from '../actions/editingActions'
import Sidebar from '../components/sidebar'

const mapStateToProps = (state) => {
    console.log('mapping state', state);
    return {
        components: state.components
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onComponentClick: (id) => {
            console.log('DISPATCHING ON COMPONENT CLICK')
            dispatch(addComponent(id))
        }
    }
}

const SidebarContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Sidebar)

export default SidebarContainer;