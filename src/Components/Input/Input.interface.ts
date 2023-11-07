import { InputHTMLAttributes } from 'react';

export interface IInput extends InputHTMLAttributes<HTMLInputElement> {
    placeholderText?: string;
    className?: string;
    classNameText?: string;
    value?: string;
}