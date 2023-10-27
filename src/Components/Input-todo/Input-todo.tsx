import React from "react";
import "./Input-todo.scss";
export const InputTodo = () => {
    return (
        <section>
            <div className="input-todo">
                <input
                    placeholder="Что нужно сделать?"
                    type="text"
                    className="input-todo__text"
                />
                <button className="input-todo__button" type="submit">
                    Добавить
                </button>
            </div>
        </section>
    );
};
