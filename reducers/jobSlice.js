import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import fetchUrl from '@/utils/fetchUrl'
export const jobslist = createAsyncThunk('job', async () => {
  const res = await fetchUrl({
    url: 'http://127.0.0.1:5000/jobs.json',
    method: 'GET',
  })
  return res
})

const jobSlice = createSlice({
  name: 'job',
  initialState: {
    loading: false,
    error: null,
    jobslist: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(jobslist.pending, (state) => {
        state.loading = true
      })
      .addCase(jobslist.fulfilled, (state, action) => {
        state.loading = false
        state.jobslist = action.payload
      })
      .addCase(jobslist.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  },
})

export default jobSlice.reducer
