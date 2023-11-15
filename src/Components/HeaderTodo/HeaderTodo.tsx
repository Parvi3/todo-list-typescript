import { IQuantity } from "./Header.interface";
import "./HeaderTodo.scss";

export const Header = ({ quantityTodo }: IQuantity) => {
    return (
        <header className="header-todo">
            <h1 className="header-todo__title">Список дел</h1>
            <h3 className="header-todo__task">
                {`Количество выполненных задач - ${quantityTodo}`}
            </h3>
        </header>
    );
};
