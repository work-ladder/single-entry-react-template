import './index.css';
import './2.png';
import React from 'react';
import ReactDOM from 'react-dom';

import Home from './Home';

if (module.hot) {
  // 实现热更新
  module.hot.accept();
}
ReactDOM.render(
  <Home />,
  document.getElementById('app'),
);
