import React from "react";
import "../app/App";

export const MinusButton = (props) => {
  return (
    <>
      <button className="minus" onClick={props.decrement}>
        -
      </button>
    </>
  );
};
