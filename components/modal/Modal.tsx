import { PropsWithChildren } from 'react';
import './modal.css';

interface Props extends PropsWithChildren {
    width?: number | string;
    height?: number | string;
    open: boolean;
    onClose: (open: boolean) => void;
}

export const Modal = ({ width, height, children, open, onClose }: Props) => (
    <div
        className="modal"
        style={{
            display: open ? 'flex' : 'none'
        }}
    >
        <div
            className="modal__bg"
            onClick={() => onClose(false)}
        />
        <div
            className="modal__panel"
            style={{ width, height }}
        >
            { children }
        </div>
    </div>
)