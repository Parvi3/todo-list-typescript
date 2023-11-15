import { IChangeTodo, ITodo } from "../../interface";

export interface IList {
    todos: ITodo[];
    className?: string;
    onChangeTodo: (props: IChangeTodo) => void;
    delTodo: (todo: string) => void;
}