import { OrdersActionTypes } from '../../types';

export const initialState = {
  loading: false,
  loaded: false,
  orders: [],
  orderError: null,
  order: {
    id: null,
    name: '',
    email: '',
    status: 'pending',
  }
};

export default (state = initialState, action) => {
  const { type, payload, error } = action;
  switch (type) {
    case OrdersActionTypes.GET_ORDERS_REQ: {
      return {
        ...state,
        loading: true,
        orderError: null,
      };
    }
    case OrdersActionTypes.GET_ORDERS_RES: {
      if (error) {
        console.log('error', error)
        return {
          ...state,
          loading: false,
          orderError: error,
        };
      }
      return {
        ...state,
        loading: false,
        loaded: true,
        orderError: null,
        orders: [...payload],
      };
    }
    case OrdersActionTypes.SET_ORDER_RES: {
      return {
        ...state,
        order: {
          ...state.order,
          ...payload
        }
      };
    }
    default:
      return state;
  }
};
