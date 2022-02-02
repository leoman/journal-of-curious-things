import { AuthActionTypes } from '../../types';
import JournalAPI, { methods } from '../JournalAPI';

const SERVICE = 'dev';

export const AuthActionCreators = {
  checkToken: () => async (dispatch) => {
    const sessionToken = await localStorage.getItem('sToken');
    const refreshToken = await localStorage.getItem('rToken');
    if (!sessionToken || !refreshToken) {
      dispatch({
        type: AuthActionTypes.AUTH_STATUS,
        error: 'No Auth',
      });
    } else {
      try {
        await JournalAPI(
          SERVICE,
          'token',
          {
            operation: 'check',
            sessionToken,
            refreshToken,
          }
        );
        dispatch({
          type: AuthActionTypes.AUTH_STATUS,
          error: null,
        });
      } catch (e) {
        dispatch({
          type: AuthActionTypes.AUTH_STATUS,
          error: 'No Auth',
        });
      }
    }
  },
  // register: (data) => async (dispatch) => {
  //   dispatch({
  //     type: AuthActionTypes.REGISTER_REQ,
  //   });
  //   try {
  //     const response = await axios.post(
  //       `${window.blueprintGetApiBaseURL()}/${SERVICE}/register`,
  //       JSON.stringify(data),
  //     );
  //     if (response.data.status === 200) {
  //       dispatch({
  //         type: AuthActionTypes.REGISTER_RES,
  //         payload: response.data.message,
  //         error: null,
  //       });
  //     } else {
  //       dispatch({
  //         type: AuthActionTypes.REGISTER_RES,
  //         error: response.data.message || 'An error occurred while registering',
  //       });
  //     }
  //   } catch (e) {
  //     dispatch({
  //       type: AuthActionTypes.REGISTER_RES,
  //       error: e.message,
  //     });
  //   }
  // },
  login: (data) => async (dispatch) => {
    dispatch({
      type: AuthActionTypes.LOGIN_REQ,
    });
    try {
      const response: any = await JournalAPI(SERVICE, methods.POST, 'login', JSON.stringify(data))

      if (response.data.status === 200) {
        localStorage.setItem('sToken', response.data.sessionToken);
        localStorage.setItem('rToken', response.data.refreshToken);
        dispatch({
          type: AuthActionTypes.LOGIN_RES,
          error: null,
        });

        return { error: null };
      }
      const error = response.data.message || 'An error occurred while logging in';

      dispatch({
        type: AuthActionTypes.LOGIN_RES,
        error,
      });

      return { error };
    } catch (e) {
      console.error(e);

      dispatch({
        type: AuthActionTypes.LOGIN_RES,
        error: 'An error occurred while logging in',
      });

      return {
        errorCode: e.response.status,
        error: 'An error occurred while logging in',
      };
    }
  },
  logout: () => async (dispatch) => {
    await localStorage.removeItem('sToken');
    await localStorage.removeItem('rToken');
    dispatch({
      type: AuthActionTypes.LOGOUT,
    });
  },
};

export default AuthActionCreators;
