import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import TodoList from "./todo-components/TodoList";
import UseState from "./old-components/UseState";
import UseEffect from "./use-effect-components/UseEffect";

function App() {
  // [values of the states (this.state), functions to update the states (this.setState)]

  return (
    <Router>
      <div className="app">
        <nav>
          <ul>
            <li>
              <Link to="/">Todo List</Link>
            </li>
            <li>
              <Link to="/use-state">Use State</Link>
            </li>
            <li>
              <Link to="/use-effect">Use Effect</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/use-state">
            <UseState />
          </Route>
          <Route path="/use-effect">
            <UseEffect />
          </Route>
          <Route path="/">
            <TodoList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
