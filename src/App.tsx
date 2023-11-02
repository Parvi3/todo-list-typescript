import React, { useCallback, useState } from "react";
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

    const onChangeTodo = useCallback(
        ({ id, value }: { id: string; value: string }) => {
            setTodos((oldTodos) =>
                oldTodos.map((oldTodo) =>
                    oldTodo.id === id ? { id, name: value } : oldTodo
                )
            );
        },
        []
    );

    return (
        <div className="app">
            <Header />
            <InputTodo addTodo={addTodo} />
            <List todos={todos} delTodo={delTodo} onChangeTodo={onChangeTodo} />
        </div>
    );
};
