import React from "react";
import { CardTodo } from "../CardTodo";
import { IList } from "./List.interface";

export const List = ({
    todos,
    delTodo,
    onChangeTodo,
    toggleComplete,
}: IList) => {
    return (
        <ul className="list">
            {todos.map((todo) => (
                <CardTodo
                    key={todo.id}
                    className="list__item"
                    todo={todo}
                    delTodo={delTodo}
                    onChangeTodo={onChangeTodo}
                    toggleComplete={toggleComplete}
                />
            ))}
        </ul>
    );
};
