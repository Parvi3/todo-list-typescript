import { ITodo } from "../../interface";

export interface IList {
    todos: ITodo[];
    className?: string;
    delTodo: (todo: string) => void
}