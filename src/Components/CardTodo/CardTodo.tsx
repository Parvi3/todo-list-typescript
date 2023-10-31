import React, { FC } from "react";
import { ICardTodo } from "./CardTodo.interface";

export const CardTodo: FC<ICardTodo> = ({ todo, className, order }) => {
    const { id, name } = todo ?? {};

    return (
        <li className={`${className} card-todo`}>
            <p className="card-todo__name" id={id}>{`${order} ${name}`}</p>
        </li>
    );
};
