import React from "react";
import CounterOne from "./CounterOne";

function UseReducer() {
  // useReducer: a hook for state management, alternative to useState
  // useState is built using useReducer
  return (
    <div className="new">
      <CounterOne />
    </div>
  );
}

export default UseReducer;
