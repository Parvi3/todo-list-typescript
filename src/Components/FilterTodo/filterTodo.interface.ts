import { Dispatch, SetStateAction } from "react";
import { ITodo } from "~/interface";

export interface IFilterTodo {
    className?: string;
    setTodos: Dispatch<SetStateAction<ITodo[]>>;
}