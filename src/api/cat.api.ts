import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiService = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.thecatapi.com/v1' }),
  endpoints: (builder) => ({
    getAllCategories: builder.query({
      query: () => 'categories',
    }),
    getImagesByCategory: builder.query({
      query: ({ page, categoryId }) =>
        `images/search?limit=100&page=${page}&category_ids=${categoryId}`,
    }),
  }),
});

export const { useGetAllCategoriesQuery, useGetImagesByCategoryQuery } =
  apiService;
