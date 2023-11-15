import {
    SyntheticEvent,
    useCallback,
    useEffect,
    useMemo,
    useState,
} from "react";
import { ITodo, IChangeTodo } from "./interface";
import { Header, InputTodo, List, PopUp, FilterTodo } from "./components";
import { CATEGORY } from "./constans";
import "./App.scss";

export const App = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [delId, setDelId] = useState<string>();
    const [activeFilter, setActiveFilter] = useState<CATEGORY>(CATEGORY.NONE);

    useEffect(() => {
        const local = localStorage.getItem("Todos");
        if (local) {
            const jsonLocal = JSON.parse(local);
            if (jsonLocal.length) {
                setTodos(jsonLocal);
            }
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("Todos", JSON.stringify(todos));
    }, [todos]);

    // функция для добавления в список
    const addTodo = useCallback(
        (todo: ITodo): void => {
            setTodos([...todos, todo]);
        },
        [todos]
    );

    // функция чтобы открыть модальное окно и получить id элемента
    const popUpOpen = useCallback((id: string) => {
        setDelId(id);
        setIsOpen(true);
    }, []);

    // функция для удаления выбранного элемента из списка
    const delTodo = useCallback(() => {
        setTodos(todos.filter((oldTodo) => oldTodo.id !== delId));
        setIsOpen(false);
    }, [delId, todos]);

    // функция для редактирования элемента после клика на нем путем получение значения из CardTodo
    const onChangeTodo = useCallback((cardTodo: IChangeTodo) => {
        setTodos((oldTodos) =>
            oldTodos.map((oldTodo) =>
                oldTodo.id === cardTodo.id
                    ? { ...oldTodo, ...cardTodo }
                    : oldTodo
            )
        );
    }, []);

    // функция чтобы закрыть модальное окно
    const closePopUp = useCallback(() => {
        setIsOpen(false);
        setDelId("");
    }, []);

    // функция для подсчета выполненных задач
    const quantityTodo = todos.filter(
        (todos) => todos.completed === true
    ).length;

    // фильтрует список по клику по категориям
    const filteredTodos = useMemo(() => {
        const result = activeFilter
            ? todos.filter((todos) => todos.category === activeFilter)
            : todos;
        return result;
    }, [activeFilter, todos]);

    // получает ID кнопки и передает в setActiveFilter
    const onClickFilter = useCallback(
        (event: SyntheticEvent<HTMLButtonElement>) => {
            const target = (event.target as HTMLButtonElement) ?? {};

            const id = target.id;

            if (id) {
                setActiveFilter(id as CATEGORY);
            }
        },
        []
    );

    // функция сбрасывает фильтр
    const onClickResetFilter = useCallback(() => {
        setActiveFilter(CATEGORY.NONE);
    }, []);

    return (
        <div className="app">
            <div className="app">
                <Header quantityTodo={quantityTodo} />

                <InputTodo addTodo={addTodo} />

                <FilterTodo
                    activeFilter={activeFilter}
                    onClickFilter={onClickFilter}
                    onClickResetFilter={onClickResetFilter}
                />

                <List
                    todos={filteredTodos}
                    onChangeTodo={onChangeTodo}
                    delTodo={popUpOpen}
                />
            </div>
            <PopUp isOpen={isOpen} close={closePopUp} okClick={delTodo} />
        </div>
    );
};
