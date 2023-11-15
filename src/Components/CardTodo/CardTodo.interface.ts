import { IChangeTodo, ITodo } from "../../interface";

export interface ICardTodo {
    todo: ITodo;
    className?: string;
    onChangeTodo: (props: IChangeTodo) => void;
    delTodo: (todo: string) => void;
}