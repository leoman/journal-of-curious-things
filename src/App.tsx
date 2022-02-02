import React from "react";
import { Provider } from 'react-redux';

import store from "./redux";

import Routing from "./Routing";

const App = () => (
  <Provider store={store}>
    <Routing />
  </Provider>
);

export default App;
