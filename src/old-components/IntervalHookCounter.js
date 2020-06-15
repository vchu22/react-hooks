import React, { useState, useEffect } from "react";

function IntervalHookCounter() {
  const [count, setCount] = useState(0);
  const tick = () => {
    setCount(count + 1);
    /*
    setCount((prevCount) => prevCount + 1); // another way to get the refresh works
    */
  };

  useEffect(() => {
    const interval = setInterval(tick, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [count]); // empty dependency list will not refresh the number because it does not watch for changes in 'count' variable

  /*
  useEffect(() => {
    // need to define the func in useEffect bc someProp is a dependency
    function doSomething() {
      console.log(someProp);
    }
    doSomething()
  }, [someProp]);
  */

  return (
    <div>
      <h3>Interval Hook Counter</h3>
      <div>{count}</div>
    </div>
  );
}

export default IntervalHookCounter;
