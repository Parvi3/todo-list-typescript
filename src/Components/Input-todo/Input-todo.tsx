import React, {
    ChangeEvent,
    FormEvent,
    useCallback,
    useRef,
    useState,
} from "react";

import "./Input-todo.scss";

export const InputTodo = () => {
    const [value, setValue] = useState<string>("");

    const onChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    }, []);

    const formRef = useRef<HTMLFormElement>({
        current: null,
    } as unknown as HTMLFormElement);

    const onSubmit = useCallback((event: FormEvent) => {
        try {
            event.preventDefault();

            event.stopPropagation();

            setValue("");
        } catch {
            console.log("пососи");
        }
    }, []);

    return (
        <form className="form-todo" onSubmit={onSubmit} ref={formRef}>
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
