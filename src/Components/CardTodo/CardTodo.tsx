import React, {
    FC,
    useCallback,
    FocusEvent,
    useState,
    SyntheticEvent,
} from "react";
import { ICardTodo } from "./CardTodo.interface";
import { Button } from "../Button";
import { Input } from "../Input";
import { Checkbox } from "../Checkbox";
import { Dropdown } from "../Dropdown";
import { CATEGORY } from "../../constans";
import classNames from "classnames";
import "./CardTodo.scss";

export const CardTodo: FC<ICardTodo> = ({
    todo,
    className,
    onChangeTodo,
    delTodo,
}) => {
    const { id, value, completed, category } = todo ?? {};
    const [isOpen, setIsOpen] = useState<boolean>(false);

    // функция для передачи в delTodo id и после в верх по дом дереву
    const onClickHandler = useCallback(() => {
        delTodo(id);
    }, [delTodo, id]);

    // получаем значение и передаем дальше по дом дереву в верх
    const onChangeHandler = useCallback(
        (event: FocusEvent<HTMLInputElement, Element>) => {
            const newValue = event.target.value;
            if (value !== newValue) {
                onChangeTodo({ id, value: newValue, category });
            }
        },
        [value, onChangeTodo, id, category]
    );

    // флажок для completed: передача id для изменение состояния на противоположное
    const onClickCheckbox = useCallback(() => {
        onChangeTodo({ id, completed: !completed });
    }, [completed, id, onChangeTodo]);

    // удаляет из списка пустые формы
    const blankStringCheck = value.length > 0 && value.trim() !== "";

    // открывает выпадашку
    const onOpenDropdown = useCallback(() => {
        setIsOpen(!isOpen);
    }, [isOpen]);

    // после клика на саму кнопку в выпадашке меняет катергорию карточки
    const onClickDropdownButton = useCallback(
        (event: SyntheticEvent<HTMLButtonElement>) => {
            const target = (event.target as HTMLButtonElement) ?? {};

            const categoryID = target.id as CATEGORY;

            if (categoryID !== category) {
                onChangeTodo({ id, category: categoryID });
                setIsOpen(false);
            }
        },
        [category, id, onChangeTodo]
    );

    return blankStringCheck ? (
        <li className={`${className} card-todo`}>
            <div
                className={classNames("card-todo__wrapper", {
                    "card-todo__color--job": category === CATEGORY.JOB,
                    "card-todo__color--study": category === CATEGORY.STUDY,
                    "card-todo__color--home": category === CATEGORY.HOME,
                })}
            >
                <Checkbox
                    className="card-todo__checkbox"
                    check={completed}
                    onClick={onClickCheckbox}
                />

                <Input
                    disabled={completed}
                    placeholderText="Пустая задача исчезнет из списка"
                    className={classNames("card-todo__input", {
                        "card-todo__input--strikethrough": completed,
                    })}
                    defaultValue={value}
                    onBlur={onChangeHandler}
                />
            </div>

            <div className="card-todo__wrapper-button">
                <Button
                    onClick={onOpenDropdown}
                    className="card-todo__button"
                    text="Статус"
                />

                <Button
                    iconName="clear"
                    onClick={onClickHandler}
                    className="card-todo__button"
                />
            </div>

            {isOpen && (
                <Dropdown
                    onClickDropdownButton={onClickDropdownButton}
                    className="card-todo__dropdown"
                />
            )}
        </li>
    ) : null;
};
