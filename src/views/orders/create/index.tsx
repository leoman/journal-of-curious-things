import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux'

import { OrdersActionCreators } from '../../../redux/actions/order';

import { ProductI } from "../../../models/product";

import Form from '../OrderForm'

interface Props {
  onSuccess: (result: any) => void
  product: ProductI
}

// eslint-disable-next-line react/display-name
const OrderCreate = ({ onSuccess, product: { id, pricePence } }: Props) => {
  const dispatch = useDispatch()

  const onSubmit = useCallback(async (fields) => {
    const { addOrder } = OrdersActionCreators;
    const formData = {
      ...fields,
      productId: id,
      pricePence,
    }
    const result: any = await dispatch(addOrder(formData));
    console.log('result', result);
    if(!result.error) {
      onSuccess(result)
    }
  }, [dispatch]);

  return (
    <Form
      onSubmit={onSubmit}
    />
  );
}

export default OrderCreate