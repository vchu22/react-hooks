import React, { useState, useEffect } from "react";

function UseEffectOne() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  // pass in a function to be executed after render
  useEffect(() => {
    console.log("useEffect - Updating document title");
    document.title = `You clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <h3>useEffect 1</h3>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>Click {count} times</button>
    </div>
  );
}

export default UseEffectOne;
