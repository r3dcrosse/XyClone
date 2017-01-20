import { connect } from 'react-redux';
import { loginUser, logoutUser, clearCache } from '../../../actions/LoginActions';
import LogoutButton from './LogoutButton';


const mapStateToProps = (state) => {
  return {
    loginStatus: state.xycloneLogin.loginStatus
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchLogoutUser: () => {
      dispatch(logoutUser())
    },
    clearCache: () => {
      dispatch(clearCache());
    }
  }
}



const LogoutButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LogoutButton)

export default LogoutButtonContainer;