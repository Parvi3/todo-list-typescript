import React, { FC, useCallback } from "react";
import { ICardTodo } from "./CardTodo.interface";
import "./CardTodo.scss";
import { Icon } from "../Icon";

export const CardTodo: FC<ICardTodo> = ({
    todo,
    className,
    order,
    delTodo,
}) => {
    const { id, name } = todo ?? {};

    const onClickHandler = useCallback(() => {
        delTodo(id);
    }, [delTodo, id]);

    return (
        <li className={`${className} card-todo`}>
            <p className="card-todo__name" id={id}>{`${order}. ${name}`}</p>
            <button className="card-todo__button" onClick={onClickHandler}>
                <Icon name="clear" />
            </button>
        </li>
    );
};
