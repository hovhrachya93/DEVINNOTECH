import { apiService } from '@/api/cat.api';
import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from '@/redux/slices/categories.slice';
import imagesByCategoryReducer from '@/redux/slices/imagesByCategory.slice';

const store = configureStore({
  reducer: {
    [apiService.reducerPath]: apiService.reducer,
    categories: categoriesReducer,
    imagesByCategory: imagesByCategoryReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiService.middleware),
});

export default store;
