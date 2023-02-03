import { useState } from "react";

export default function CounterPage() {
  const [count, setCount] = useState(0);

  function onClickCountUp() {
    setCount(count + 1); // 1 (임시저장공간 : 0)
    setCount(count + 1); // 1 (임시저장공간 : 0)
    setCount(count + 1); // 1 (임시저장공간 : 0)
    setCount((prev) => prev + 1); // 2 (임시저장공간 : 1)
    setCount((prev) => prev + 1); // 3 (임시저장공간 : 2)
    // setCount((prevState) => prevState + 1);
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
