import React, { useState } from 'react';
import './App.css';

function Todo({ todo, index }) {
    return <div className="todo">{todo.text}</div>;
}

function App() {
    // [values of the states (this.state), functions to update the states (this.setState)]
    const [todos, setTodos] = useState([
        {
            text: 'Lear about React',
            isCompleted: false,
        },
        {
            text: 'Cleaning house',
            isCompleted: false,
        },
        {
            text: 'Do laundry',
            isCompleted: false,
        },
    ]);
    return (
        <div className="app">
            <div className="todo-list">
                {todos.map((todo, index) => (
                    <Todo key={index} todo={todo} />
                ))}
            </div>
        </div>
    );
}

export default App;
