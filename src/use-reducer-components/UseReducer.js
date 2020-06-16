import React from "react";
import CounterOne from "./CounterOne";
import CounterTwo from "./CounterTwo";

function UseReducer() {
  // useReducer: a hook for state management, alternative to useState
  // useState is built using useReducer
  return (
    <div className="new">
      <CounterOne />
      <CounterTwo />
    </div>
  );
}

export default UseReducer;
