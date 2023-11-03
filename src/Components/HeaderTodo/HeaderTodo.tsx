import React from "react";
import "./HeaderTodo.scss";
import { IQuantuty } from "./Header.interface";

export const Header = ({ quantutyTodo }: IQuantuty) => {
    return (
        <header className="header-todo">
            <h1 className="header-todo__title">Список дел</h1>
            <h3 className="header-todo__task">
                {`Количество выполненных задач - ${quantutyTodo}`}
            </h3>
        </header>
    );
};
