import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import TodoList from "./todo-components/TodoList";
import Old from "./old-components/Old";

function App() {
  // [values of the states (this.state), functions to update the states (this.setState)]

  return (
    <div className="app">
      <TodoList />
      <Old />
    </div>
  );
}

export default App;
