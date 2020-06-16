import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import TodoList from "./todo-components/TodoList";
import UseState from "./use-state-components/UseState";
import UseEffect from "./use-effect-components/UseEffect";
import UseConext from "./use-context-components/UseContext";
import UseReducer from "./use-reducer-components/UseReducer";

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
            <li>
              <Link to="/use-context">Use Context</Link>
            </li>
            <li>
              <Link to="/use-reducer">Use Reducer</Link>
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
          <Route path="/use-context">
            <UseConext />
          </Route>
          <Route path="/use-reducer">
            <UseReducer />
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
