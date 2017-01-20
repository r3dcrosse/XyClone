export function loginUser (userInfo) {
  return {
    type: 'LOGIN_USER',
    userInfo: userInfo
  }
}

export function logoutUser () {
  return {
    type: 'LOGOUT_USER'
  }
}

export function clearCache () {
  return {
    type: 'CLEAR_CACHE'
  }
}

