import React from "react";
import "../app/App";

// propsでCounter.jsからcountを増減させる関数を受け取り、クリックした際に関数が起動するようにする。
export const Button = (props) => {
  return (
    <div>
      <button className="plus" onClick={props.increment}>
        +
      </button>
      <button className="minus" onClick={props.decrement}>
        -
      </button>
    </div>
  );
};
