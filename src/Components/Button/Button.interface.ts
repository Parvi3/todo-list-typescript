import { ButtonHTMLAttributes } from 'react';

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    className: string;
    mode?: TButton;
    text?: string;
    iconName?: string;
}

export type TButton = "primary" | "secondary";