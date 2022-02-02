/* eslint-disable no-unused-vars */
import { AuthActionTypes } from '../../types';

export const initialState = {
  loading: false,
  isAuthenticated: true,
  loginError: null,
};

export default (state = initialState, action) => {
  const { type, error } = action;
  switch (type) {
    case AuthActionTypes.AUTH_STATUS: {
      if (error) {
        return {
          ...state,
          isAuthenticated: false,
        };
      }
      return {
        ...state,
        isAuthenticated: true,
      };
    }
    case AuthActionTypes.LOGIN_REQ: {
      return {
        ...state,
        loading: true,
      };
    }
    case AuthActionTypes.LOGIN_RES: {
      if (error) {
        return {
          ...state,
          loading: false,
          loginError: error,
        };
      }
      return {
        ...state,
        loading: false,
        loginError: null,
        isAuthenticated: true,
      };
    }
    case AuthActionTypes.LOGOUT: {
      return initialState;
    }
    default:
      return state;
  }
};
