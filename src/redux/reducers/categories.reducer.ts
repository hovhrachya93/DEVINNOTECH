import * as types from '@/redux/types/categories.types';

interface Category {
  id: string;
  name: string;
}

interface CategoriesState {
  categories: Category[];
  loading: boolean;
  error: string | null;
}

const initialState: CategoriesState = {
  categories: [],
  loading: false,
  error: null,
};

type CategoriesAction = {
  type: string;
  payload?: Category[];
  error?: string;
};

export const categoriesReducer = (
  state = initialState,
  action: CategoriesAction
): CategoriesState => {
  switch (action.type) {
    case types.FETCH_CATEGORIES_PENDING:
      return { ...state, loading: true, error: null };
    case types.FETCH_CATEGORIES_SUCCESS:
      return { ...state, loading: false, categories: action.payload || [] };
    case types.FETCH_CATEGORIES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error || 'An error occurred',
      };
    default:
      return state;
  }
};
