import React, { useState } from 'react';
import './App.css';

function Todo({ todo, index, completeTodo }) {
    return (
        <div
            style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}
            className="todo"
        >
            {todo.text}
            <div>
                <button onClick={() => completeTodo(index)}>Complete</button>
            </div>
        </div>
    );
}

function TodoForm({ addTodo }) {
    const [value, setValue] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue('');
    };
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                className="input"
                value={value}
                placeholder="Add todo..."
                onChange={e => setValue(e.target.value)}
            />
        </form>
    );
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

    const addTodo = text => {
        const newTodos = [...todos, { text }];
        setTodos(newTodos);
    };

    const completeTodo = index => {
        const newTodos = [...todos];
        newTodos[index].isCompleted = true;
        setTodos(newTodos);
    };

    return (
        <div className="app">
            <div className="todo-list">
                {todos.map((todo, index) => (
                    <Todo
                        key={index}
                        index={index}
                        todo={todo}
                        completeTodo={completeTodo}
                    />
                ))}
                <TodoForm addTodo={addTodo} />
            </div>
        </div>
    );
}

export default App;