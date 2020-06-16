import React from "react";
import CounterOne from "./CounterOne";
import CounterTwo from "./CounterTwo";
import CounterThree from "./CounterThree";

function UseReducer() {
  // useReducer: a hook for state management, alternative to useState
  // useState is built using useReducer
  return (
    <div className="new">
      <CounterOne />
      <CounterTwo />
      <CounterThree />
    </div>
  );
}

export default UseReducer;
