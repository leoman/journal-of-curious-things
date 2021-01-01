import { PostsActionTypes } from '../../types';

export const initialState = {
  loading: false,
  loaded: false,
  posts: [],
  postError: null,
  post: {
    id: null,
    title: '',
    subtitle: '',
    content: '',
    status: 'draft',
    sticky: false,
    mainImage: '',
    excerpt: '',
    date: new Date().toISOString(),
    photo: '',
  }
};

export default (state = initialState, action) => {
  const { type, payload, error } = action;
  switch (type) {
    case PostsActionTypes.GET_POSTS_REQ: {
      return {
        ...state,
        loading: true,
        postError: null,
      };
    }
    case PostsActionTypes.GET_POSTS_RES: {
      if (error) {
        console.log('error', error)
        return {
          ...state,
          loading: false,
          postError: error,
        };
      }
      return {
        ...state,
        loading: false,
        loaded: true,
        postError: null,
        posts: [...payload],
      };
    }
    case PostsActionTypes.SET_POST_RES: {
      return {
        ...state,
        post: {
          ...state.post,
          ...payload
        }
      };
    }
    default:
      return state;
  }
};
