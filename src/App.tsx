import React, { useState } from "react";
import { ITodo } from "./interface";
import { Header, InputTodo, List } from "./components";
import "./App.scss";

export const App = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);

    const addTodo = (todo: ITodo): void => {
        setTodos([...todos, todo]);
    };

    const delTodo = (id: string): void => {
        setTodos(todos.filter((oldTodo) => oldTodo.id !== id));
    };

    return (
        <div className="app">
            <Header />
            <InputTodo addTodo={addTodo} />
            <List todos={todos} delTodo={delTodo} />
        </div>
    );
};
