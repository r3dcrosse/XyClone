import { _components, storage } from '../cache/ComponentCache';

const initialState = {
  loginStatus: {}
}

export default function xycloneLogin (state = initialState, action) {
  switch(action.type) {
    case 'LOGIN_USER':
      console.log(action.userInfo, 'THIS IS ACTION.USERID');
      return state;
    default:
      console.log('GOT DEFAULT XYCLONE LOGIN', state)
      return state;
  }
}