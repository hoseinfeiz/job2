import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import fetchUrl from '@/utils/fetchUrl'

export const login = createAsyncThunk('auth/login', async () => {
  const response = await fetchUrl({
    url: '/login.json',
    method: 'GET',
  })
  return response
})

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    logged: false,
    loading: false,
    error: null,
    user: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true
        state.logged = false
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false
        state.logged = true
        state.user = action.payload.user // Assuming the payload structure includes a user object
        state.error = null // Reset error on successful login
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false
        state.logged = false
        state.error = action.error.message // Store the error message
      })
  },
})

export default authSlice.reducer
