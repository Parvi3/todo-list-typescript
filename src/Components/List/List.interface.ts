import { IChangeTodo, ITodo } from "../../interface";

export interface IList {
    todos: ITodo[];
    className?: string;
    onChangeTodo: (props: IChangeTodo) => void;
    toggleComplete: (id: string) => void;
    delTodo: (todo: string) => void;
}