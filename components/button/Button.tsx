import { PropsWithChildren } from "react";

import './button.css';

interface Props extends PropsWithChildren {
    onClick?: () => void;
    text?: boolean;
}

export const Button = ({ children, onClick, text }: Props) => (
    <button
        type="button"
        className={
            `button
            ${!text ? 'button--filled' : 'button--text'}
            `
        }
        onClick={onClick}
    >
        { children?.toString().toUpperCase() }
    </button>
);