import React, { FC, useCallback, FocusEvent } from "react";
import { ICardTodo } from "./CardTodo.interface";
import "./CardTodo.scss";
import { Icon } from "../Icon";

export const CardTodo: FC<ICardTodo> = ({
    todo,
    className,
    onChangeTodo,
    toggleComplete,
    delTodo,
}) => {
    const { id, name, completed } = todo ?? {};

    // функция для передачи в delTodo id и после в верх по дом дереву
    const onClickHandler = useCallback(() => {
        delTodo(id);
    }, [delTodo, id]);

    // получаем значение и передаем дальше по дом дереву в верх
    const onChangeHandler = useCallback(
        (event: FocusEvent<HTMLInputElement, Element>) => {
            const newValue = event.target.value;
            if (name !== newValue) {
                onChangeTodo({ id, value: newValue });
            }
        },
        [id, name, onChangeTodo]
    );

    const onClickComplete = useCallback(() => {
        toggleComplete(id);
    }, [id, toggleComplete]);

    const completedLineThrough = completed ? `completed` : "";

    return (
        <li className={`${className} card-todo`}>
            <input
                type="checkbox"
                className="card-todo__checkbox"
                onClick={onClickComplete}
            />
            <input
                disabled={completed}
                className={`card-todo__name ${completedLineThrough}`}
                type="text"
                id={id}
                defaultValue={name}
                onBlur={onChangeHandler}
            />
            <button className="card-todo__button" onClick={onClickHandler}>
                <Icon name="clear" />
            </button>
        </li>
    );
};
