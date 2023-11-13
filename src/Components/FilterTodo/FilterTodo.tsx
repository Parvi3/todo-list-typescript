import { FC, useCallback } from "react";
import classNames from "classnames";
import { Button } from "../Button";
import { IFilterTodo } from "./filterTodo.interface";
import "./filterTodo.scss";

export const FilterTodo: FC<IFilterTodo> = ({ className = "", setTodos }) => {
    const onClickJob = useCallback(() => {
        setTodos((todos) => todos.filter((todos) => todos.status === "Job"));
    }, [setTodos]);

    const onClickStudy = useCallback(() => {
        setTodos((todos) => todos.filter((todos) => todos.status === "Study"));
    }, [setTodos]);

    const onClickHome = useCallback(() => {
        setTodos((todos) => todos.filter((todos) => todos.status === "Home"));
    }, [setTodos]);

    const onClickReset = useCallback(() => {}, []);

    return (
        <div
            className={classNames("filter-todo", {
                [className]: !!className,
            })}
        >
            <Button
                onClick={onClickJob}
                text="Р"
                className="filter-todo__button-job"
            />

            <Button
                onClick={onClickStudy}
                text="У"
                className="filter-todo__button-study"
            />

            <Button
                onClick={onClickHome}
                text="Д"
                className="filter-todo__button-home"
            />

            <Button
                onClick={onClickReset}
                text="Сбросить"
                className="filter-todo__button-reset"
            />
        </div>
    );
};
