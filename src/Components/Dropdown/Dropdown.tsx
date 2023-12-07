import { FC, useRef } from "react";
import { Button } from "../Button";
import { IDropdown } from "./dropdown.interface";
import classNames from "classnames";
import { CATEGORY } from "../../constans";
import { useClickOutside } from "../../hooks";
import "./Dropdown.scss";

export const Dropdown: FC<IDropdown> = ({
  className = "",
  onClickDropdownButton,
  onClose,
}) => {
  const dropDownRef = useRef<HTMLDivElement>(null);

  useClickOutside({ element: dropDownRef, callback: onClose });

  return (
    <div
      className={classNames("dropdown-todo", {
        [className]: !!className,
      })}
      ref={dropDownRef}
    >
      <Button
        id={CATEGORY.JOB}
        onClick={onClickDropdownButton}
        text="Р"
        className="dropdown-todo__button-job"
      />
      <Button
        id={CATEGORY.STUDY}
        onClick={onClickDropdownButton}
        text="У"
        className="dropdown-todo__button-study"
      />
      <Button
        id={CATEGORY.HOME}
        onClick={onClickDropdownButton}
        text="Д"
        className="dropdown-todo__button-home"
      />
      <Button
        id={CATEGORY.NONE}
        onClick={onClickDropdownButton}
        text="Сбросить"
        className="dropdown-todo__button-reset"
      />
    </div>
  );
};
