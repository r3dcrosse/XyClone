import { _components, storage } from '../cache/ComponentCache';

const persistedLogin = sessionStorage.getItem('loginStatus') ?
  {
    loginStatus: JSON.parse(sessionStorage.getItem('loginStatus'))
  }
    :
  {
    loginStatus: {}
  }


export default function xycloneLogin (state = persistedLogin, action) {
  switch(action.type) {
    case 'LOGIN_USER':
      // console.log(action.userInfo, 'THIS IS ACTION.USERID');
      return Object.assign({}, state, {
        loginStatus: action.userInfo
      });
    case 'LOGOUT_USER':
      // console.log(action);
      return Object.assign({}, state, {
        loginStatus: {}
      });

    default:
      // console.log('GOT DEFAULT XYCLONE LOGIN', state)
      return state;
  }
}
