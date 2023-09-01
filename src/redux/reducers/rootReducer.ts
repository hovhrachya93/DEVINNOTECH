import { combineReducers } from 'redux';
import { imagesReducer } from './images.reducer';
import { categoriesReducer } from './categories.reducer';

const rootReducer = combineReducers({
  images: imagesReducer,
  categories: categoriesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
