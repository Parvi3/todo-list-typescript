import { IChangeTodo, ITodo } from "../../interface";

export interface IList {
    todos: ITodo[];
    className?: string;
    delTodo: (todo: string) => void;
    onChangeTodo: (props: IChangeTodo) => void;
    toggleComplete: (id: string) => void;
}