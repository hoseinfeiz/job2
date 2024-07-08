import fetchUrl from './fetchUrl'
import actionTypes from './actionTypes'
const reduxCall = async (dispatch, { url, method, name }) => {
  dispatch({
    type: actionTypes[`${name}_START`],
    logged: false,
    loading: true,
  })

  try {
    const response = await fetchUrl({ url, method })
    dispatch({
      type: actionTypes[`${name}_SUCCESS`],
      logged: true,
      loading: false,
      ...response,
    })
  } catch (error) {
    dispatch({
      type: actionTypes[`${name}_FAILED`],
      logged: false,
      loading: false,
      error,
    })
  }
}

export default reduxCall
