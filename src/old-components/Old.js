import React from "react";
import ClassCounter from "./ClassCounter";
import HookCounter from "./HookCounter";
import HookCounterTwo from "./HookCounterTwo";
import HookCounterThree from "./HookCounterThree";
import HookCounterFour from "./HookCounterFour";
import UseEffectOne from "./UseEffectOne";
import HookContainer from "./MouseContainer";
import IntervalHookCounter from "./IntervalHookCounter";
import DataFetching from "./DataFetching";

function Old() {
  return (
    <div className="new">
      <ClassCounter />
      <HookCounter />
      <HookCounterTwo />
      <HookCounterThree />
      <HookCounterFour />
      <UseEffectOne />
      <HookContainer />
      <IntervalHookCounter />
      <DataFetching />
    </div>
  );
}

export default Old;
