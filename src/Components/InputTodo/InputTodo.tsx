import React, { ChangeEvent, FormEvent, useCallback, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { IInputTodo } from "./InputTodo.interface";
import "./InputTodo.scss";

export const InputTodo = ({ addTodo }: IInputTodo) => {
    const [value, setValue] = useState("");

    // функция для получения значение после onChange в инпуте
    const onChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    }, []);

    // функция срабатывает после отправки формы и отмены стандартного  поведения формы
    const onSubmit = useCallback(
        (event: FormEvent) => {
            try {
                event.preventDefault();

                event.stopPropagation();

                addTodo({ id: uuidv4(), name: value });

                setValue("");
            } catch {
                console.log("Что-то пошло не так!");
            }
        },
        [addTodo, value]
    );

    return (
        <form className="form-todo" onSubmit={onSubmit}>
            <div className="form-todo__field">
                <input
                    placeholder="Что нужно сделать?"
                    type="text"
                    className="form-todo__input"
                    value={value}
                    onChange={onChange}
                />
                <button
                    disabled={!value.length}
                    className="form-todo__button"
                    type="submit"
                >
                    Добавить
                </button>
            </div>
        </form>
    );
};
