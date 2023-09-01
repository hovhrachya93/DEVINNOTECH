export interface Image {
  id: string;
  url: string;
}

export interface ImagesState {
  images: Image[];
  loading: boolean;
  error: string | null;
}

const initialState: ImagesState = {
  images: [],
  loading: false,
  error: null,
};

type ImagesAction = {
  type: string;
  payload?: Image[];
  error?: string;
};

export const imagesReducer = (state = initialState, action: ImagesAction) => {
  switch (action.type) {
    case 'FETCH_IMAGES_PENDING':
      return { ...state, loading: true, error: null };
    case 'FETCH_IMAGES_SUCCESS':
      return { ...state, loading: false, images: action.payload || [] };
    case 'FETCH_IMAGES_ERROR':
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};
