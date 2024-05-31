import { ChangeEvent } from "react";

import './input-field.css';

interface Props {
    placeholder?: string;
    value?: string | number;
    onChange?: (value: string) => void;
    type?: 'text' | 'number';
}

export const InputField = ({ placeholder, value, onChange, type }: Props) => (
    <input type={type} className="input-field" placeholder={placeholder} value={value} onChange={onChange ? (event: ChangeEvent<HTMLInputElement>) => onChange(event.target.value) : () => {}} />
);