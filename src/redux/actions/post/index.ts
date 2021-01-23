import { PostsActionTypes } from '../../types';
import JournalAPI, { methods } from '../JournalAPI';

const SERVICE = 'dev';

export const PostsActionCreators = {
  getPosts: (live = false) => async (dispatch) => {
    dispatch({
      type: PostsActionTypes.GET_POSTS_REQ,
    });

    let filter = '';
    if (live) {
      filter = '?status=live'
    }

    try {
      const response: any = await JournalAPI(SERVICE, methods.GET, `posts${filter}`);
      dispatch({
        type: PostsActionTypes.GET_POSTS_RES,
        payload: response.data.result || [],
      });
    } catch (e) {
      console.error('Error - getPosts:', e);
      dispatch({
        type: PostsActionTypes.GET_POSTS_RES,
        payload: [],
        error: e.data ? e.data.message : 'Something went wrong',
      });
    }
  },
  addPost: (data) => async (dispatch) => {
    dispatch({
      type: PostsActionTypes.CREATE_POST_REQ,
    });
    try {
      const response: any = await JournalAPI(SERVICE, methods.POST, 'post', data);
      dispatch({
        type: PostsActionTypes.CREATE_POST_RES,
        payload: response.data.result || [],
      });
      dispatch(PostsActionCreators.getPosts())
    } catch (e) {
      console.error('Error - addPost:', e);
      dispatch({
        type: PostsActionTypes.CREATE_POST_RES,
        error: e.data ? e.data.message : 'Something went wrong',
      });
    }
  },
  editPost: (data) => async (dispatch) => {
    dispatch({
      type: PostsActionTypes.EDIT_POST_REQ,
    });
    try {
      const response: any = await JournalAPI(SERVICE, methods.PATCH, 'post', data);
      dispatch({
        type: PostsActionTypes.EDIT_POST_RES,
        payload: response.data.result || [],
      });
      dispatch(PostsActionCreators.getPosts())
    } catch (e) {
      console.error('Error - editPost:', e);
      dispatch({
        type: PostsActionTypes.EDIT_POST_RES,
        error: e.data ? e.data.message : 'Something went wrong',
      });
    }
  },
  deletePost: (data) => async (dispatch) => {
    dispatch({
      type: PostsActionTypes.DELETE_POST_REQ,
    });
    try {
      const response: any = await JournalAPI(SERVICE, methods.DELETE, 'post', data);
      dispatch({
        type: PostsActionTypes.DELETE_POST_RES,
        payload: response.data.success || [],
      });
      dispatch(PostsActionCreators.getPosts())
    } catch (e) {
      console.error('Error - deletePost:', e);
      dispatch({
        type: PostsActionTypes.DELETE_POST_RES,
        error: e.data ? e.data.message : 'Something went wrong',
      });
    }
  },
};
