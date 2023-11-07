import React, { FC } from "react";
import { IIcon } from "./Icon.interface";
import { DEFAULT_ICON } from "./Icon.constans";
import classNames from "classnames";
import Icons from "../../assets/Icon.svg";
import "./Icon.scss";

export const Icon: FC<IIcon> = ({
    name,
    className,
    color = DEFAULT_ICON.COLOR,
    width = DEFAULT_ICON.WIDTH,
    height = DEFAULT_ICON.HEIGHT,
}) => {
    return (
        <svg
            className={classNames("icon-todo", `icon-todo-${name}`, {
                className: !!className,
            })}
            fill={color}
            width={width}
            height={height}
        >
            <use xlinkHref={`${Icons}#${name}`} />
        </svg>
    );
};
