import { PropsWithChildren } from "react";

import './button.css';

interface Props extends PropsWithChildren {
    onClick?: () => void;
    filled?: boolean;
    text?: boolean;
}

export const Button = ({ children, onClick, text, filled = true }: Props) => (
    <button className={`button ${filled ? 'button--filled' : ''} ${text ? 'button--text' : ''}`} onClick={onClick}>{ children }</button>
);