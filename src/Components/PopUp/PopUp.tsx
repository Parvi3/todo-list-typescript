import { FC } from "react";
import { IPopUp } from "./PopUp.interface";
import "./PopUp.scss";

export const PopUp: FC<IPopUp> = ({ isOpen, okClick, close }) => {
    return isOpen ? (
        <>
            <div className={`pop-up-todo`}>
                <h2 className="pop-up-todo__title">
                    А вы уверены что хотите удалить?
                </h2>

                <div className="pop-up-todo__wrapper">
                    <button className="pop-up-todo__button" onClick={okClick}>
                        Да
                    </button>

                    <button className="pop-up-todo__button" onClick={close}>
                        Нет
                    </button>
                </div>
            </div>

            <div className="vail" />
        </>
    ) : null;
};
