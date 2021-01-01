import { ProductsActionTypes } from '../../types';

export const initialState = {
  loading: false,
  loaded: false,
  products: [],
  productError: null,
  product: {
    id: null,
    title: '',
    subtitle: '',
    content: '',
    status: 'draft',
    productType: 'class',
    mainImage: '',
    excerpt: '',
    date: new Date().toISOString(),
    photo: '',
  }
};

export default (state = initialState, action) => {
  const { type, payload, error } = action;
  switch (type) {
    case ProductsActionTypes.GET_PRODUCTS_REQ: {
      return {
        ...state,
        loading: true,
        productError: null,
      };
    }
    case ProductsActionTypes.GET_PRODUCTS_RES: {
      if (error) {
        console.log('error', error)
        return {
          ...state,
          loading: false,
          productError: error,
        };
      }
      return {
        ...state,
        loading: false,
        loaded: true,
        productError: null,
        products: [...payload],
      };
    }
    case ProductsActionTypes.SET_PRODUCT_RES: {
      return {
        ...state,
        product: {
          ...state.product,
          ...payload
        }
      };
    }
    default:
      return state;
  }
};
