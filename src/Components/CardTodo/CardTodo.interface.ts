import { ITodo } from "~/interface";

export interface ICardTodo {
    todo: ITodo;
    className?: string;
    order: number;
}
