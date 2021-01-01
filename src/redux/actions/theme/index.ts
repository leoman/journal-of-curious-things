import { ThemesActionTypes } from '../../types';
import JournalAPI, { methods } from '../JournalAPI';

const SERVICE = 'dev';

export const ThemesActionCreators = {
  getThemes: () => async (dispatch) => {
    dispatch({
      type: ThemesActionTypes.GET_THEMES_REQ,
    });
    try {
      const response: any = await JournalAPI(SERVICE, methods.GET, 'themes');
      dispatch({
        type: ThemesActionTypes.GET_THEMES_RES,
        payload: response.data.result || [],
      });
    } catch (e) {
      console.error('Error - getThemes:', e);
      dispatch({
        type: ThemesActionTypes.GET_THEMES_RES,
        error: e.data ? e.data.message : 'Something went wrong',
      });
    }
  },
  addTheme: (data) => async (dispatch) => {
    dispatch({
      type: ThemesActionTypes.CREATE_THEME_REQ,
    });
    try {
      const response: any = await JournalAPI(SERVICE, methods.POST, 'theme', data);
      dispatch({
        type: ThemesActionTypes.CREATE_THEME_RES,
        payload: response.data.result || [],
      });
      dispatch(ThemesActionCreators.getThemes())
    } catch (e) {
      console.error('Error - addTheme:', e);
      dispatch({
        type: ThemesActionTypes.CREATE_THEME_RES,
        error: e.data ? e.data.message : 'Something went wrong',
      });
    }
  },
  editTheme: (data) => async (dispatch) => {
    dispatch({
      type: ThemesActionTypes.EDIT_THEME_REQ,
    });
    try {
      const response: any = await JournalAPI(SERVICE, methods.PATCH, 'theme', data);
      dispatch({
        type: ThemesActionTypes.EDIT_THEME_RES,
        payload: response.data.result || [],
      });
      dispatch(ThemesActionCreators.getThemes())
    } catch (e) {
      console.error('Error - editTheme:', e);
      dispatch({
        type: ThemesActionTypes.EDIT_THEME_RES,
        error: e.data ? e.data.message : 'Something went wrong',
      });
    }
  },
  deleteTheme: (data) => async (dispatch) => {
    dispatch({
      type: ThemesActionTypes.DELETE_THEME_REQ,
    });
    try {
      const response: any = await JournalAPI(SERVICE, methods.DELETE, 'theme', data);
      dispatch({
        type: ThemesActionTypes.DELETE_THEME_RES,
        payload: response.data.success || [],
      });
      dispatch(ThemesActionCreators.getThemes())
    } catch (e) {
      console.error('Error - deleteTheme:', e);
      dispatch({
        type: ThemesActionTypes.DELETE_THEME_RES,
        error: e.data ? e.data.message : 'Something went wrong',
      });
    }
  },
};
