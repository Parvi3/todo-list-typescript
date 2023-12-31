import { FC } from "react";
import { IPopUp } from "./PopUp.interface";
import { Button } from "../Button";
import "./PopUp.scss";

export const PopUp: FC<IPopUp> = ({ isOpen, okClick, close }) => {
    return isOpen ? (
        <>
            <div className={`pop-up-todo`}>
                <h2 className="pop-up-todo__title">
                    А вы уверены что хотите удалить?
                </h2>

                <div className="pop-up-todo__wrapper">
                    <Button
                        text="Да"
                        mode="secondary"
                        onClick={okClick}
                        className="pop-up-todo__button"
                    />

                    <Button
                        text="Нет"
                        onClick={close}
                        className="pop-up-todo__button"
                    />
                </div>
            </div>

            <div className="vail" />
        </>
    ) : null;
};
