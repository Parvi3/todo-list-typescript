import { CATEGORY } from "../constans";

export interface ITodo {
    id: string;
    value: string;
    completed: boolean;
    category: CATEGORY;
}

export interface IChangeTodo {
    id: string;
    value?: string;
    completed?: boolean;
    category?: CATEGORY;
}
