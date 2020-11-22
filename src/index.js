import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'

import store from './redux/store';

ReactDOM.render(
  // 这里使用 Provider 包裹最外层组件
  // 同时将我们生成的 store 作为 Provider 参数
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);