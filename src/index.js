import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import {store} from "./store/store_config/store"
import Main from './Main';

ReactDOM.render(
  <React.StrictMode>
        <Provider store={store}>
        <Main />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
