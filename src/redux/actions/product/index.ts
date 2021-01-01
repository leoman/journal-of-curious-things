import { ProductsActionTypes } from '../../types';
import JournalAPI, { methods } from '../JournalAPI';

const SERVICE = 'dev';

export const ProductsActionCreators = {
  getProducts: () => async (dispatch) => {
    dispatch({
      type: ProductsActionTypes.GET_PRODUCTS_REQ,
    });
    try {
      const response: any = await JournalAPI(SERVICE, methods.GET, 'products');
      dispatch({
        type: ProductsActionTypes.GET_PRODUCTS_RES,
        payload: response.data.result || [],
      });
    } catch (e) {
      console.error('Error - getProducts:', e);
      dispatch({
        type: ProductsActionTypes.GET_PRODUCTS_RES,
        payload: [],
        error: e.data ? e.data.message : 'Something went wrong',
      });
    }
  },
  addProduct: (data) => async (dispatch) => {
    dispatch({
      type: ProductsActionTypes.CREATE_PRODUCT_REQ,
    });
    try {
      const response: any = await JournalAPI(SERVICE, methods.POST, 'product', data);
      dispatch({
        type: ProductsActionTypes.CREATE_PRODUCT_RES,
        payload: response.data.result || [],
      });
      dispatch(ProductsActionCreators.getProducts())
    } catch (e) {
      console.error('Error - addProduct:', e);
      dispatch({
        type: ProductsActionTypes.CREATE_PRODUCT_RES,
        error: e.data ? e.data.message : 'Something went wrong',
      });
    }
  },
  editProduct: (data) => async (dispatch) => {
    dispatch({
      type: ProductsActionTypes.EDIT_PRODUCT_REQ,
    });
    try {
      const response: any = await JournalAPI(SERVICE, methods.PATCH, 'product', data);
      dispatch({
        type: ProductsActionTypes.EDIT_PRODUCT_RES,
        payload: response.data.result || [],
      });
      dispatch(ProductsActionCreators.getProducts())
    } catch (e) {
      console.error('Error - editProduct:', e);
      dispatch({
        type: ProductsActionTypes.EDIT_PRODUCT_RES,
        error: e.data ? e.data.message : 'Something went wrong',
      });
    }
  },
  deleteProduct: (data) => async (dispatch) => {
    dispatch({
      type: ProductsActionTypes.DELETE_PRODUCT_REQ,
    });
    try {
      const response: any = await JournalAPI(SERVICE, methods.DELETE, 'product', data);
      dispatch({
        type: ProductsActionTypes.DELETE_PRODUCT_RES,
        payload: response.data.success || [],
      });
      dispatch(ProductsActionCreators.getProducts())
    } catch (e) {
      console.error('Error - deleteProduct:', e);
      dispatch({
        type: ProductsActionTypes.DELETE_PRODUCT_RES,
        error: e.data ? e.data.message : 'Something went wrong',
      });
    }
  },
};
