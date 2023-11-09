import { FC } from "react";
import classNames from "classnames";
import { IInput } from "./Input.interface";
import "./Input.scss";

export const Input: FC<IInput> = ({
    placeholderText,
    value,
    className = "",
    ...props
}) => {
    return (
        <input
            className={classNames("input-todo", {
                [className]: !!className,
            })}
            type="text"
            placeholder={placeholderText}
            value={value}
            {...props}
        />
    );
};
