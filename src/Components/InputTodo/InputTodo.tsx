import React, { ChangeEvent, FormEvent, useCallback, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { IInputTodo } from "./InputTodo.interface";
import "./InputTodo.scss";

export const InputTodo = ({ addTodo }: IInputTodo) => {
    const [value, setValue] = useState("");

    const onChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    }, []);

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
                    name="todo"
                    className="form-todo__input"
                    value={value}
                    onChange={onChange}
                />
                <button className="form-todo__button" type="submit">
                    Добавить
                </button>
            </div>
        </form>
    );
};
