import { FC } from "react";
import classNames from "classnames";
import "./Checkbox.scss";
import { ICheckbox } from "./Checkbox.interface";

export const Checkbox: FC<ICheckbox> = ({ className, name, ...props }) => {
    return (
        <input
            className={classNames("checkbox", `${name}`, {
                className: !!className,
            })}
            type="checkbox"
            {...props}
        />
    );
};
