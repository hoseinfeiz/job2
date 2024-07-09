import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../reducers/authSlice'
import registerReducer from '../reducers/registerSlice'

export default configureStore({
  reducer: {
    auth: authReducer,
    register: registerReducer,
  },
})
