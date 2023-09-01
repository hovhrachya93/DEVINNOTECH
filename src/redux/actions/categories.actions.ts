import { Dispatch } from 'redux';
import { getAllCategories } from '@/api/cat.api';
import * as types from '@/redux/types/categories.types';

export const fetchCategories = () => async (dispatch: Dispatch) => {
  dispatch({ type: types.FETCH_CATEGORIES_PENDING });
  try {
    const response = await getAllCategories();
    dispatch({ type: types.FETCH_CATEGORIES_SUCCESS, payload: response.data });
  } catch (error: unknown) {
    if (error instanceof Error) {
      dispatch({ type: types.FETCH_CATEGORIES_ERROR, error: error.message });
    } else {
      dispatch({
        type: types.FETCH_CATEGORIES_ERROR,
        error: 'An unknown error occurred',
      });
    }
  }
};
