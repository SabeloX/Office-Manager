import { ChangeEvent } from "react";

import './input-field.css';

interface Props {
    placeholder?: string;
    value?: string;
    onChange?: (value: string) => void;
}

export const InputField = ({ placeholder, value, onChange }: Props) => (
    <input className="input-field" placeholder={placeholder} value={value} onChange={onChange ? (event: ChangeEvent<HTMLInputElement>) => onChange(event.target.value) : () => {}} />
);