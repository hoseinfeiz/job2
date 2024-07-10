import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../reducers/authSlice'
import registerReducer from '../reducers/registerSlice'
import jobReducer from '../reducers/jobSlice'

export default configureStore({
  reducer: {
    auth: authReducer,
    register: registerReducer,
    job: jobReducer,
  },
})
