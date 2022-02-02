import React, { useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { ProductI } from "../../../models/product";
import { priceFormat } from "../../helpers";
import OrderCreate from '../../orders/create'

const currency = 'GBP'

const options = {
  "client-id": 'AdHCNr2J6c76_i_g5hOT6zcfYaAO2CsPk9pVbW9x-Fi9dyIo2_IS1fPT8x3GSpFII3DUnpieDQA7j3oP',
  'buyer-country': 'GB',
  currency: 'GBP',
  debug: false,
}



interface Props {
  product: ProductI
}

const Purchase = ({ product }: Props) => {

  const [details, setDetails] = useState<boolean>(false);

  const createOrder = (data, actions) => {
    return actions.order
      .create({
        purchase_units: [
          {
            amount: {
              currency_code: currency,
              value: priceFormat(product.pricePence),
            },
          },
        ],
      })
      .then((orderId) => {
        // Your code here after create the order
        console.log(orderId);
        return orderId;
      });
  }

  const onSuccess = () => {
    console.log('onSuccess');
    setDetails(true);
  }

  return (
    <PayPalScriptProvider 
      options={options}>

      {!details && <OrderCreate
        product={product}
        onSuccess={onSuccess}
      />}

      {details && <PayPalButtons
        style={{ layout: "horizontal" }}
        createOrder={createOrder}
      />}
    </PayPalScriptProvider>
  );
};

export default Purchase;
