import { FC } from "react";
import classNames from "classnames";
import { IInput } from "./Input.interface";
import "./Input.scss";

export const Input: FC<IInput> = ({
    placeholderText,
    classNameText,
    value,
    className,
    ...props
}) => {
    return (
        <input
            className={classNames("input-todo", `${classNameText}`, {
                className: !!className,
            })}
            type="text"
            placeholder={placeholderText}
            value={value}
            {...props}
        />
    );
};
