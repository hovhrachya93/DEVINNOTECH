import { Dispatch } from 'redux';
import { getImagesByCategory } from '@/api/cat.api';

export const fetchImages =
  (page: number, categoryId: string) => async (dispatch: Dispatch) => {
    dispatch({ type: 'FETCH_IMAGES_PENDING' });
    try {
      const response = await getImagesByCategory(page, categoryId);
      dispatch({ type: 'FETCH_IMAGES_SUCCESS', payload: response.data });
    } catch (error: unknown) {
      if (error instanceof Error) {
        dispatch({ type: 'FETCH_IMAGES_ERROR', error: error.message });
      } else {
        dispatch({
          type: 'FETCH_IMAGES_ERROR',
          error: 'An unknown error occurred',
        });
      }
    }
  };
