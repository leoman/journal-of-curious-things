import { OrdersActionTypes } from '../../types';
import JournalAPI, { methods } from '../JournalAPI';

const SERVICE = 'dev';

export const OrdersActionCreators = {
  getOrders: () => async (dispatch) => {
    dispatch({
      type: OrdersActionTypes.GET_ORDERS_REQ,
    });
    try {
      const response: any = await JournalAPI(SERVICE, methods.GET, `orders`);
      dispatch({
        type: OrdersActionTypes.GET_ORDERS_RES,
        payload: response.data.result || [],
      });
    } catch (e) {
      console.error('Error - getOrders:', e);
      dispatch({
        type: OrdersActionTypes.GET_ORDERS_RES,
        payload: [],
        error: e.data ? e.data.message : 'Something went wrong',
      });
    }
  },
  addOrder: (data) => async (dispatch) => {
    dispatch({
      type: OrdersActionTypes.CREATE_ORDER_REQ,
    });
    try {
      const response: any = await JournalAPI(SERVICE, methods.POST, 'order', data);
      dispatch({
        type: OrdersActionTypes.CREATE_ORDER_RES,
        payload: response.data.result || [],
      });
      return response;
    } catch (e) {
      console.error('Error - addOrder:', e);
      dispatch({
        type: OrdersActionTypes.CREATE_ORDER_RES,
        error: e.data ? e.data.message : 'Something went wrong',
      });
    }
  },
  editOrder: (id, data) => async (dispatch) => {
    dispatch({
      type: OrdersActionTypes.EDIT_ORDER_REQ,
    });
    try {
      const response: any = await JournalAPI(SERVICE, methods.PATCH, `order/${id}`, data);
      dispatch({
        type: OrdersActionTypes.EDIT_ORDER_RES,
        payload: response.data.result || [],
      });
    } catch (e) {
      console.error('Error - editOrder:', e);
      dispatch({
        type: OrdersActionTypes.EDIT_ORDER_RES,
        error: e.data ? e.data.message : 'Something went wrong',
      });
    }
  },
};
