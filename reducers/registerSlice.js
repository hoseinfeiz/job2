import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import fetchUrl from '@/utils/fetchUrl'
export const register = createAsyncThunk('auth/register', async () => {
  const res = await fetchUrl({
    url: 'http://localhost:5000/register.json',
    method: 'GET',
  })
  return res
})

const registerSlice = createSlice({
  name: 'register',
  initialState: {
    loading: false,
    logged: false,
    error: null,
    message: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.loading = true
        state.logged = false
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false
        state.logged = true
        state.message = { ...action }
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false
        state.logged = false
        state.error = action.error.message
      })
  },
})

export default registerSlice.reducer
