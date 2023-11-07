import React, { useCallback, useState } from "react";
import { ITodo, IChangeTodo } from "./interface";
import { Header, InputTodo, List, PopUp } from "./components";
import "./App.scss";

export const App = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [delId, setDelId] = useState<string>();

    // функция для добавления в список
    const addTodo = useCallback(
        (todo: ITodo): void => {
            setTodos([...todos, todo]);
        },
        [todos]
    );

    // функция чтобы открыть модальное окно и получить id элемента
    const popUpOpen = useCallback((id: string) => {
        setDelId(id);
        setIsOpen(true);
    }, []);

    // функция для удаления выбранного элемента из списка
    const delTodo = useCallback(() => {
        setTodos(todos.filter((oldTodo) => oldTodo.id !== delId));
        setIsOpen(false);
    }, [delId, todos]);

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

    const quantutyTodo = todos.filter(
        (todos) => todos.completed === true
    ).length;

    const closePopUp = useCallback(() => {
        setIsOpen(false);
        setDelId("");
    }, []);

    return (
        <div className="app">
            <div className="app">
                <Header quantutyTodo={quantutyTodo} />
                <InputTodo addTodo={addTodo} />
                <List
                    todos={todos}
                    onChangeTodo={onChangeTodo}
                    toggleComplete={toggleComplete}
                    delTodo={popUpOpen}
                />
            </div>
            <PopUp isOpen={isOpen} close={closePopUp} okClick={delTodo} />
        </div>
    );
};
