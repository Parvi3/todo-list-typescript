import { ITodo } from "../../interface";

export interface IList {
    todos: ITodo[];
    className?: string;
    delTodo: (todo: string) => void;
    onChangeTodo: (props: { id: string, value: string }) => void;
}