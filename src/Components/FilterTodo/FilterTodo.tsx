import { FC } from "react";
import classNames from "classnames";
import { Button } from "../Button";
import { IFilterTodo } from "./FilterTodo.interface";
import { CATEGORY } from "../../constans";
import "./FilterTodo.scss";

export const FilterTodo: FC<IFilterTodo> = ({
    className = "",
    onClickFilter,
    onClickResetFilter,
    activeFilter,
}) => {
    return (
        <div
            className={classNames("filter-todo", {
                [className]: !!className,
            })}
        >
            <Button
                id={CATEGORY.JOB}
                onClick={onClickFilter}
                text="Р"
                className={classNames(
                    "filter-todo__button filter-todo__button--job",
                    {
                        "filter-todo__button--active":
                            activeFilter === CATEGORY.JOB,
                    }
                )}
            />

            <Button
                id={CATEGORY.STUDY}
                onClick={onClickFilter}
                text="У"
                className={classNames(
                    "filter-todo__button filter-todo__button--study",
                    {
                        "filter-todo__button--active":
                            activeFilter === CATEGORY.STUDY,
                    }
                )}
            />

            <Button
                id={CATEGORY.HOME}
                onClick={onClickFilter}
                text="Д"
                className={classNames(
                    "filter-todo__button filter-todo__button--home",
                    {
                        "filter-todo__button--active":
                            activeFilter === CATEGORY.HOME,
                    }
                )}
            />

            <Button
                onClick={onClickResetFilter}
                text="Сбросить"
                className="filter-todo__button--reset"
            />
        </div>
    );
};
