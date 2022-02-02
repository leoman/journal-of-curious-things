import { combineReducers } from 'redux';
import AuthReducer from './auth';
import PostReducer from './post';
import ProductReducer from './products';
import ThemeReducer from './theme';
import GalleryImageReducer from './galleryImage';
import OrderReducer from './order';

const reducers = combineReducers({
  AuthReducer,
  PostReducer,
  ProductReducer,
  ThemeReducer,
  GalleryImageReducer,
  OrderReducer,
});

export default reducers;
