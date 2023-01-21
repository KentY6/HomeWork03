import { useState } from "react";
import "../app/App";
import { PlusButton } from "../components/PlusButton";
import { MinusButton } from "../components/MinusButton";

const Counter = () => {
  const [count, setCount] = useState(0);

  // countに+1する処理
  const increment = () => {
    setCount((prevState) => prevState + 1);
  };

  // countに-1する処理
  const decrement = () => {
    setCount((prevState) => prevState - 1);
  };

  return (
    <dev className="counter-body">
      <h2 className="count-num">{count}</h2>
      {/* 子コンポーネントにprops→'increment/decrement'を追加し、中に同名の関数を入れる */}
      <div className="count-button">
        <PlusButton increment={increment} />
        <MinusButton decrement={decrement} />
      </div>
    </dev>
  );
};

export default Counter;
