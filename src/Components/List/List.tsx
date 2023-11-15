import React from "react";
import { CardTodo } from "../CardTodo";
import { IList } from "./List.interface";

export const List = ({ todos, onChangeTodo, delTodo }: IList) => {
    return (
        <ul className="list">
            {todos.map((todo) => (
                <CardTodo
                    key={todo.id}
                    className="list__item"
                    todo={todo}
                    onChangeTodo={onChangeTodo}
                    delTodo={delTodo}
                />
            ))}
        </ul>
    );
};
