import { combineReducers } from 'redux';
import PostReducer from './post';
import ProductReducer from './products';
import ThemeReducer from './theme';

const reducers = combineReducers({
  PostReducer,
  ProductReducer,
  ThemeReducer,
});

export default reducers;
