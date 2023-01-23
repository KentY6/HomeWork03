import React from "react";
import "../app/App";

// propsでCounter.jsからcountを増加させる関数を受け取り、クリックした際に関数が起動するようにする。
export const Button = (props) => {
  return (
    <>
      <button className="button" onClick={props.process}>
        {props.icon}
      </button>
    </>
  );
};
