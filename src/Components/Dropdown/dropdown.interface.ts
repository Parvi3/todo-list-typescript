import { SyntheticEvent } from "react";

export interface IDropdown {
    className?: string;
    onClickDropdownButton: (event: SyntheticEvent<HTMLButtonElement, Event>) => void
    onClose: () => void;
}