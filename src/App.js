import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import TodoList from "./todo-components/TodoList";
import Old from "./old-components/Old";

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
              <Link to="/old">Old Demo</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/old">
            <Old />
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
