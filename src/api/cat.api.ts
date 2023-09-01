import axios from 'axios';

export const getAllCategories = () => {
  return axios.get('https://api.thecatapi.com/v1/categories');
};

export const getImagesByCategory = (page: number, categoryId: string) => {
  return axios.get(
    `https://api.thecatapi.com/v1/images/search?limit=100&page=${page}&category_ids=${categoryId}`
  );
};
