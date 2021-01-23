import { combineReducers } from 'redux';
import PostReducer from './post';
import ProductReducer from './products';
import ThemeReducer from './theme';
import GalleryImageReducer from './galleryImage';

const reducers = combineReducers({
  PostReducer,
  ProductReducer,
  ThemeReducer,
  GalleryImageReducer,
});

export default reducers;
