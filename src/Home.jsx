import React, { useState, useRef } from 'react';
import width from './useWindowWidth';
import UseCallbackComponent from './component/useCallback';
import UseReducerComponent from './component/useReducer';
import UseContextComponent from './component/UseContext';
import SimpleRedux from "./component/simple-redux/app";

// let countTemp = 0;
export default function Home() {
  const [count, setCount] = useState(0);
  const ref = useRef(0);
  const increment = () => {
    setTimeout(() => {
      // 1. 短时间点击多次不会增加，每次点击都是执行函数，count 是初始值，不是最新值
      // setCount(count + 1);
      // 2. 用一个临时变量
      // countTemp += 1;
      // setCount(countTemp + 1);
      // 3. useRef,不管函数组件执行多少次，而 useRef 返回的对象永远都是原来那一个。
      // 可以记住当前点击了多少次
      setCount(ref.current += 1);
    }, 2000);
  };
  return (
    <div>
      <div>
        当前屏幕宽度:
        {width()}
      </div>
      <div>要nm$l</div>
      <button type="button" onClick={increment}>
        点击了
        {count}
        次
      </button>

      <br />
      <h3>UseCallbackComponent</h3>
      <UseCallbackComponent />

      <br />
      <h3>UseReducerComponent</h3>
      <UseReducerComponent />

      <br />
      <h3>UseContextComponent</h3>
      <UseContextComponent />

      <SimpleRedux />
    </div>
  );
}
