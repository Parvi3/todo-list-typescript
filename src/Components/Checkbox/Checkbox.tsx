import { FC } from "react";
import classNames from "classnames";
import "./Checkbox.scss";
import { ICheckbox } from "./Checkbox.interface";

export const Checkbox: FC<ICheckbox> = ({
    className = "",
    check,
    ...props
}) => {
    return (
        <input
            className={classNames("checkbox-todo__input", {
                [className]: !!className,
            })}
            type="checkbox"
            defaultChecked={check}
            {...props}
        />
    );
};
