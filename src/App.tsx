import React, { useCallback, useState } from "react";
import { ITodo, IChangeTodo } from "./interface";
import { Header, InputTodo, List } from "./components";
import "./App.scss";

export const App = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);

    // функция для добавления в список
    const addTodo = useCallback(
        (todo: ITodo): void => {
            setTodos([...todos, todo]);
        },
        [todos]
    );

    let quantutyTodo = todos.filter((todos) => todos.completed === true).length;

    // функция для удаления выбранного элемента из списка
    const delTodo = useCallback(
        (id: string) => {
            setTodos(todos.filter((oldTodo) => oldTodo.id !== id));
        },
        [todos]
    );

    // функция для редактирования элемента после клика на нем путем получение значения в CardTodo
    const onChangeTodo = useCallback(({ id, value }: IChangeTodo) => {
        setTodos((oldTodos) =>
            oldTodos.map((oldTodo) =>
                oldTodo.id === id
                    ? { id, name: value, completed: false }
                    : oldTodo
            )
        );
    }, []);

    // функция для изменение completed при клике на чекбокс
    const toggleComplete = useCallback(
        (id: string) => {
            setTodos(
                todos.map((todo) =>
                    todo.id === id
                        ? { ...todo, completed: !todo.completed }
                        : todo
                )
            );
        },
        [todos]
    );

    return (
        <div className="app">
            <Header quantutyTodo={quantutyTodo} />
            <InputTodo addTodo={addTodo} />
            <List
                todos={todos}
                delTodo={delTodo}
                onChangeTodo={onChangeTodo}
                toggleComplete={toggleComplete}
            />
        </div>
    );
};
