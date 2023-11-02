import React from "react";
import { CardTodo } from "../CardTodo";
import { IList } from "./List.interface";

export const List = ({ todos, delTodo, onChangeTodo }: IList) => {
    return (
        <ul className="list">
            {todos.map((todo, index) => (
                <CardTodo
                    key={todo.id}
                    order={index + 1}
                    className="list__item"
                    todo={todo}
                    delTodo={delTodo}
                    onChangeTodo={onChangeTodo}
                />
            ))}
        </ul>
    );
};
