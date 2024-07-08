import reduxCall from '@/utils/reduxCall'
const AUTH_ACTION = () => {
  return async (dispatch) => {
    reduxCall(dispatch, {
      url: 'http://localhost:5000/login.json',
      method: 'GET',
      name: 'LOGIN_ACTION',
    })
  }
}

export { AUTH_ACTION }
