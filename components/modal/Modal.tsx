import { PropsWithChildren } from 'react';
import './modal.css';

interface Props extends PropsWithChildren {
    width?: number | string;
    height?: number | string;
}

export const Modal = ({ width, height, children }: Props) => (
    <div className="modal">
        <div className="modal__bg"></div>
        <div
            className="modal__panel"
            style={{ width, height }}
        >
            { children }
        </div>
    </div>
)