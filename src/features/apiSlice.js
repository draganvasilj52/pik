import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axiosInstance from '../axios/axiosInstance'

const initialState = {
  status: 'idle',
  error: null,
  list: [],
}

/* export const getCategories = createAsyncThunk(
  'categories/getCategories',
  async ({ limit }) => {
    return fetch(`https://fakestoreapi.com/products?limit=${limit}`).then(
      (res) => res.json()
    )
  }
) */

/* export const getCategories = createAsyncThunk(
  'categories/getCategories',
  async ({ limit }) => {
    const response = await fetch(
      `https://fakestoreapi.com/products?limit=${limit}`
    )
    return response.json()

  }
)
 */
export const getCategories = createAsyncThunk(
  'categories/getCategories',
  async ({ limit }) => {
    const response = await axiosInstance.get('/products', {
      params: {
        limit,
      },
    })
    return response.data
  }
)

const apiSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getCategories.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.status = 'succeeded'

        state.list = state.list.concat(action.payload)
      })
      .addCase(getCategories.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
})

export const selectAllPosts = (state) => state.categories.list

export default apiSlice.reducer
