import React, { useState, useCallback } from 'react';

export default function UseCallbackComponent() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const onChange = useCallback((e) => {
    setInputValue(e.target.value);
  }, []);

  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <>
      <input value={inputValue} onChange={onChange} />
      <div onClick={increment}>{count}</div>
    </>
  );
}
