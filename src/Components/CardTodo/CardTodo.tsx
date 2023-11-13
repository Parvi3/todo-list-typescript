import React, { FC, useCallback, FocusEvent, useState } from "react";
import { ICardTodo } from "./CardTodo.interface";
import { Button } from "../Button";
import { Input } from "../Input";
import { Checkbox } from "../Checkbox";
import "./CardTodo.scss";
import { Dropdown } from "../Dropdown";

export const CardTodo: FC<ICardTodo> = ({
    todo,
    className,
    onChangeTodo,
    toggleComplete,
    delTodo,
    setTodos,
}) => {
    const { id, name, completed, status } = todo ?? {};

    // функция для передачи в delTodo id и после в верх по дом дереву
    const onClickHandler = useCallback(() => {
        delTodo(id);
    }, [delTodo, id]);

    // получаем значение и передаем дальше по дом дереву в верх
    const onChangeHandler = useCallback(
        (event: FocusEvent<HTMLInputElement, Element>) => {
            const newValue = event.target.value;
            if (name !== newValue) {
                onChangeTodo({ id, value: newValue, status });
            }
        },
        [status, id, name, onChangeTodo]
    );

    // флажок для completed: передача id для изменение состояния на противоположное
    const onClickComplete = useCallback(() => {
        toggleComplete(id);
    }, [id, toggleComplete]);

    // зачеркивает текст
    const completedLineThrough = completed ? `completed` : "";

    // удаляет из списка пустые формы
    const blankStringCheck = name.length > 0 && name.trim() !== "";

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const onOpenDrop = useCallback(() => {
        setIsOpen(!isOpen);
    }, [isOpen]);

    const onCloseJob = useCallback(
        (id: string) => {
            setIsOpen(false);
            setTodos((todos) =>
                todos.map((todo) =>
                    todo.id === id ? { ...todo, status: "Job" } : todo
                )
            );
        },
        [setTodos]
    );

    const onCloseStudy = useCallback(
        (id: string) => {
            setIsOpen(false);
            setTodos((todos) =>
                todos.map((todo) =>
                    todo.id === id ? { ...todo, status: "Study" } : todo
                )
            );
        },
        [setTodos]
    );

    const onCloseHome = useCallback(
        (id: string) => {
            setIsOpen(false);
            setTodos((todos) =>
                todos.map((todo) =>
                    todo.id === id ? { ...todo, status: "Home" } : todo
                )
            );
        },
        [setTodos]
    );

    const onCloseReset = useCallback(
        (id: string) => {
            setIsOpen(false);
            setTodos((todos) =>
                todos.map((todo) =>
                    todo.id === id ? { ...todo, status: "" } : todo
                )
            );
        },
        [setTodos]
    );

    const inputColorJob = status === "Job" ? "input-color__job" : "";

    const inputColorStudy = status === "Study" ? "input-color__study" : "";

    const inputColorHome = status === "Home" ? "input-color__home" : "";

    return blankStringCheck ? (
        <li className={`${className} card-todo`}>
            <div
                className={`card-todo__wrapper ${inputColorJob} ${inputColorStudy} ${inputColorHome}`}
            >
                <Checkbox
                    className="card-todo__checkbox"
                    check={completed}
                    onClick={onClickComplete}
                />

                <Input
                    disabled={completed}
                    placeholderText="Пустая задача исчезнет из списка"
                    className={`${completedLineThrough}`}
                    id={id}
                    defaultValue={name}
                    onBlur={onChangeHandler}
                />
            </div>

            <div className="card-todo__wrapper-button">
                <Button
                    onClick={onOpenDrop}
                    className="card-todo__button"
                    text="Статус"
                />

                <Button
                    iconName="clear"
                    onClick={onClickHandler}
                    className="card-todo__button"
                />
            </div>

            {isOpen && (
                <Dropdown
                    id={id}
                    onCloseJob={onCloseJob}
                    onCloseStudy={onCloseStudy}
                    onCloseHome={onCloseHome}
                    onCloseReset={onCloseReset}
                    className="card-todo__dropdown"
                />
            )}
        </li>
    ) : null;
};
