import { ArrowLeftIcon } from "@/icons";
import { Modal } from "../modal/Modal";
import { Button } from "../button/Button";

import './delete-modal.css';

interface DeletModalProps {
    open: boolean;
    onClose: () => void;
    onBack?: () => void;
    onDelete: () => void;
    office?: boolean;
}

export const DeleteModal = ({ open, onClose, onBack, onDelete, office }: DeletModalProps) => (
    <Modal open={open} onClose={onClose}>
        <div className="delete-modal">
            <div>
                {onBack && <ArrowLeftIcon onClick={onBack} />}
                <h4>{`Are you sure you want to Delete ${office ? 'Office' :'Staff Member?'}`}</h4>
            </div>
            <div>
                <Button onClick={onDelete}>{`delete ${office ? 'office' : 'staff member'}`}</Button>
                <Button text onClick={onClose}>{`keep ${office ? 'office' : 'staff member'}`}</Button>
            </div>
        </div>
    </Modal>
);