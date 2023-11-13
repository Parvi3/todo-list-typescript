export interface ITodo {
    id: string;
    name: string;
    completed: boolean;
    status: string;
}

export interface IChangeTodo {
    id: string;
    value: string;
    status: string;
}
