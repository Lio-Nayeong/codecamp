import React, { useState } from "react";

export default function CounterPage() {
  const [count, setCount] = useState(0);

  function onClickCountUp() {
    setCount(count + 1);
  }
  function onClickCountDown() {
    setCount(count - 1);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={onClickCountUp}>증가</button>
      <button onClick={onClickCountDown}>감소</button>
    </div>
  );
}
