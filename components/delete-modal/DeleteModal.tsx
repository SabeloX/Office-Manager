import { ArrowLeftIcon } from "@/icons";
import { Modal } from "../modal/Modal";
import { Button } from "../button/Button";

import './delete-modal.css';

interface DeletModalProps {
    open: boolean;
    onClose: () => void;
    onBack?: () => void;
    onDelete: () => void;
}

export const DeleteModal = ({ open, onClose, onBack, onDelete }: DeletModalProps) => (
    <Modal open={open} onClose={onClose}>
        <div className="delete-modal">
            <div>
                {onBack && <ArrowLeftIcon onClick={onBack} />}
                <h4>Are you sure you want to Delete Staff Member?</h4>
            </div>
            <div>
                <Button onClick={onDelete}>delete staff member</Button>
                <Button text onClick={onClose}>keep staff member</Button>
            </div>
        </div>
    </Modal>
);