import { connect } from 'react-redux';
import { updateStorageAndStateComponents } from '../../actions/EditingActions'
import { updateProjectsStorage } from '../../actions/ProjectActions'
import { loginUser } from '../../actions/LoginActions';
import Login from './Login';

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
    },
    updateStorageComponents: (storage) => {
      dispatch(updateStorageAndStateComponents(storage))
    },
    updateProjectsStorage: (projects) => {
      dispatch(updateProjectsStorage(projects));
    }
  }
}

const LoginLocalContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)

export default LoginLocalContainer;