import { Dispatch, SetStateAction } from "react";
import { IChangeTodo, ITodo } from "../../interface";

export interface ICardTodo {
    todo: ITodo;
    className?: string;
    onChangeTodo: (props: IChangeTodo) => void;
    toggleComplete: (id: string) => void;
    delTodo: (todo: string) => void;
    setTodos: Dispatch<SetStateAction<ITodo[]>>;
}