import './index.css';
import './2.png';
import React from 'react';
import ReactDOM from 'react-dom';

if (module.hot) {
  // 实现热更新
  module.hot.accept();
}
const a = <div>123</div>;
ReactDOM.render(
  a,
  document.getElementById('app'),
);
