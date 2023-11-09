import React, { FC, useCallback, FocusEvent } from "react";
import { ICardTodo } from "./CardTodo.interface";
import { Button } from "../Button";
import { Input } from "../Input";
import { Checkbox } from "../Checkbox";
import "./CardTodo.scss";

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
            <div className="card-todo__wrapper">
                <Checkbox
                    className="card-todo__checkbox"
                    onClick={onClickComplete}
                />

                <Input
                    disabled={completed}
                    className={`${completedLineThrough}`}
                    id={id}
                    defaultValue={name}
                    onBlur={onChangeHandler}
                />
            </div>
            <Button mode="primary" iconName="clear" onClick={onClickHandler} />
        </li>
    );
};
