import { apiService } from '@/api/cat.api';
import { createSlice } from '@reduxjs/toolkit';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    categories: [],
    loading: false,
    error: null as string | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(
        apiService.endpoints.getAllCategories.matchPending,
        (state) => {
          state.loading = true;
          state.error = null;
        }
      )
      .addMatcher(
        apiService.endpoints.getAllCategories.matchFulfilled,
        (state, action) => {
          state.loading = false;
          state.categories = action.payload;
        }
      )
      .addMatcher(
        apiService.endpoints.getAllCategories.matchRejected,
        (state, action) => {
          state.loading = false;
          state.error = action.error.message
            ? action.error.message
            : 'An error occurred';
        }
      );
  },
});

export default categoriesSlice.reducer;
