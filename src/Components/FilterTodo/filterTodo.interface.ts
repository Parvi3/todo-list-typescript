import { SyntheticEvent } from "react";

export interface IFilterTodo {
    className?: string;
    onClickFilter: (event: SyntheticEvent<HTMLButtonElement>) => void;
    onClickResetFilter: () => void;
    activeFilter: string;
}