import { createSlice } from '@reduxjs/toolkit';
import { apiService } from '@/api/cat.api';

const imagesByCategorySlice = createSlice({
  name: 'imagesByCategory',
  initialState: {
    images: [],
    selectedCategory: null,
    loading: false,
    error: null as string | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(
        apiService.endpoints.getImagesByCategory.matchPending,
        (state) => {
          state.loading = true;
          state.error = null;
        }
      )
      .addMatcher(
        apiService.endpoints.getImagesByCategory.matchFulfilled,
        (state, action) => {
          console.log('dsds');
          state.loading = false;
          state.selectedCategory = action.meta.arg.originalArgs.categoryId;
          state.images = action.payload;
        }
      )
      .addMatcher(
        apiService.endpoints.getImagesByCategory.matchRejected,
        (state, action) => {
          state.loading = false;
          state.error = action.error.message
            ? action.error.message
            : 'an error occurred';
        }
      );
  },
});

export default imagesByCategorySlice.reducer;
