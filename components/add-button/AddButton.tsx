import { PlusIcon } from "@/icons/PlusIcon";

import './add-button.css';

interface Props {
    onClick?: () => void;
}

export const Addbutton = ({ onClick } : Props) => (
    <div className="add-button" onClick={onClick}>
        <PlusIcon />
    </div>
);