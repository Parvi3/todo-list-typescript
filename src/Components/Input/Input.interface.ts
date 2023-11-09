import { InputHTMLAttributes } from 'react';

export interface IInput extends InputHTMLAttributes<HTMLInputElement> {
    placeholderText?: string;
    className?: string;
    value?: string;
    minLength?: number;
    maxLength?: number;
}