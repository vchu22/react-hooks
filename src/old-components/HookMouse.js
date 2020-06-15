import React, { useState, useEffect } from "react";

function HookMouse() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const logMousePosition = (e) => {
    console.log("Mouse event");
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    console.log("useEffect called");
    window.addEventListener("mousemove", logMousePosition);

    // effect clean up code (canceling event listener)
    return () => {
      console.log("Component unmounting code");
      window.removeEventListener("mousemove", logMousePosition);
    };
  }, []); // use empty array to run effect only once without depending on any state

  return (
    <div>
      <span>
        Hooks X - {x} Y - {y}
      </span>
    </div>
  );
}

export default HookMouse;
