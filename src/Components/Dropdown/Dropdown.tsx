import { FC, useCallback } from "react";
import { Button } from "../Button";
import { IDropdown } from "./dropdown.interface";
import classNames from "classnames";
import "./Dropdown.scss";

export const Dropdown: FC<IDropdown> = ({
    className = "",
    id,
    onCloseJob,
    onCloseStudy,
    onCloseHome,
    onCloseReset,
}) => {
    const onClickJob = useCallback(() => {
        onCloseJob(id);
    }, [id, onCloseJob]);

    const onClickStudy = useCallback(() => {
        onCloseStudy(id);
    }, [id, onCloseStudy]);

    const onClickHome = useCallback(() => {
        onCloseHome(id);
    }, [id, onCloseHome]);

    const onClickReset = useCallback(() => {
        onCloseReset(id);
    }, [id, onCloseReset]);

    return (
        <div
            className={classNames("dropdown-todo", {
                [className]: !!className,
            })}
        >
            <Button
                onClick={onClickJob}
                text="Р"
                className="dropdown-todo__button-job"
            />
            <Button
                onClick={onClickStudy}
                text="У"
                className="dropdown-todo__button-study"
            />
            <Button
                onClick={onClickHome}
                text="Д"
                className="dropdown-todo__button-home"
            />
            <Button
                onClick={onClickReset}
                text="Сбросить"
                className="dropdown-todo__button-reset"
            />
        </div>
    );
};
