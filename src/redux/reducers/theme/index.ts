import { ThemesActionTypes } from '../../types';

export const initialState = {
  loading: false,
  loaded: false,
  themes: [],
  themeError: null,
  theme: {
    id: null,
    name: '',
  }
};

export default (state = initialState, action) => {
  const { type, payload, error } = action;
  switch (type) {
    case ThemesActionTypes.GET_THEMES_REQ: {
      return {
        ...state,
        loading: true,
        themeError: null,
      };
    }
    case ThemesActionTypes.GET_THEMES_RES: {
      if (error) {
        console.log('error', error)
        return {
          ...state,
          loading: false,
          themeError: error,
        };
      }
      return {
        ...state,
        loading: false,
        loaded: true,
        themeError: null,
        themes: [...payload],
      };
    }
    case ThemesActionTypes.SET_THEME_RES: {
      return {
        ...state,
        theme: {
          ...state.theme,
          ...payload
        }
      };
    }
    default:
      return state;
  }
};
