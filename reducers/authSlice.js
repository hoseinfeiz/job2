import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    logged: false,
    loading: false,
    user: {},
  },
  reducers: {
    LOGIN_ACTION_START: (state, action) => {
      state.logged = false
      state.loading = true
    },
  },
})

export const { LOGIN_ACTION_START } = authSlice.actions

export const selectAuth = (state) => state.auth

export default authSlice.reducer
