import React from 'react';
import width from './useWindowWidth';

// eslint-disable-next-line react/prefer-stateless-function
export default function Home() {
  return (
    <div>
      <div>
        当前屏幕宽度:
        {width()}
      </div>
      <div>要nm$l</div>
    </div>
  );
}
