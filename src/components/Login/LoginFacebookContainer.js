import { connect } from 'react-redux';
import { loginUser } from '../../actions/LoginActions';
import FacebookLogin from './LoginFacebook';

const mapStateToProps = (state) => {
  console.log(state.xycloneLogin, 'XYCLONELOGIN YOLO');
  return {
    loginStatus: state.xycloneLogin.loginStatus
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchLoginUser: (userInfo) => {
      dispatch(loginUser(userInfo))
    }
  }
}



const FacebookLoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FacebookLogin)

export default FacebookLoginContainer;