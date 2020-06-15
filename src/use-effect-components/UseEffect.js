import React from "react";
import UseEffectOne from "../use-effect-components/UseEffectOne";
import IntervalHookCounter from "../use-effect-components/IntervalHookCounter";
import DataFetching from "../use-effect-components/DataFetching";
import HookContainer from "./MouseContainer";

function UseEffect() {
  return (
    <div className="new">
      <HookContainer />
      <UseEffectOne />
      <IntervalHookCounter />
      <DataFetching />
    </div>
  );
}

export default UseEffect;
