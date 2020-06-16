import React from "react";
import ClassCounter from "./ClassCounter";
import HookCounter from "./HookCounter";
import HookCounterTwo from "./HookCounterTwo";
import HookCounterThree from "./HookCounterThree";
import HookCounterFour from "./HookCounterFour";

function UseState() {
  return (
    <div className="new">
      <ClassCounter />
      <HookCounter />
      <HookCounterTwo />
      <HookCounterThree />
      <HookCounterFour />
    </div>
  );
}

export default UseState;
