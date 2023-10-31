import React, { useState } from "react";
import { ITodo } from "./interface";
import { Header, InputTodo, List } from "./components";
import "./App.scss";

export const App = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);

    const addTodo = (todo: ITodo): void => {
        setTodos([...todos, todo]);
    };

    return (
        <div className="App">
            <Header />
            <InputTodo addTodo={addTodo} />
            <List todos={todos} />
        </div>
    );
};
