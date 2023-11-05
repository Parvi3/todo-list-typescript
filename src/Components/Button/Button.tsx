import { FC } from "react";
import { Icon } from "../Icon";
import { IButton } from "./Button.interface";
import classNames from "classnames";
import "./Button.scss";

export const Button: FC<IButton> = ({
    className,
    mode = "primary",
    text,
    iconName,
    ...props
}) => {
    return (
        <button
            type="button"
            className={classNames("button-todo", {
                className: !!className,
                "button-todo--primary": mode === "primary",
                "button-todo--secondary": mode === "secondary",
            })}
            {...props}
        >
            {!!iconName && (
                <Icon name={iconName} className="button-todo__icon" />
            )}
            {!!text && <span className="botton-todo__text">{text}</span>}
        </button>
    );
};
