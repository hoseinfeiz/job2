import actionTypes from '@/utils/actionTypes'
const auth = (state = [], action) => {
  switch (action.type) {
    case actionTypes.LOGIN_ACTION_START:
      return {
        ...state,
        logged: action.logged,
        loading: action.loading,
      }
    case actionTypes.LOGIN_ACTION_SUCCESS:
      return {
        ...state,
        logged: action.logged,
        loading: action.loading,
        ...action,
      }
    case actionTypes.LOGIN_ACTION_FAILED:
      return {
        ...state,
        logged: action.logged,
        loading: action.loading,
        error: action.error,
      }
    default:
      return state
  }
}

export default auth
