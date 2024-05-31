import { Staff } from "@/interfaces";
import Image from "next/image";

import './staff-list.css';
import { ArrowLeftIcon, OptionsIcon } from "@/icons";
import { Modal } from "../modal/Modal";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Button } from "../button/Button";
import { useAppOffices } from "@/context/Office.context";
import { StaffInfoModal } from "../staff-info-modal/StaffInfoModal";
import { DeleteModal } from "../delete-modal/DeleteModal";

interface Props {
    staffList: Staff[];
    setStaffList: Dispatch<SetStateAction<Staff[] | undefined>>;
}

export const StaffList = ({ staffList, setStaffList }: Props) => {
    const [openOptions, setOpenOptions] = useState<boolean>(false);
    const [openDelete, setOpenDelete] = useState<boolean>(false);
    const [selectedStaffMember, setSelectedStaffMember] = useState<string>();
    const [openEditStaffMember, setOpenEditStaffMember] = useState<boolean>(false);
    const [selectedMemberForEdit, setSelectedMemberForEdit] = useState<Staff>();

    const { deleteStaffMember, currentOffice } = useAppOffices();

    const handleSelectedStaffMember = (id: string) => {
        setSelectedStaffMember(id);
        setOpenOptions(true);
    }

    const handleDeletePrompt = () => {
        setOpenOptions(false);
        setOpenDelete(true);
    }

    const handleBack = () => {
        setOpenDelete(false);
        setOpenOptions(true);
    }

    const handleDeleteStaffMember = () => {
        selectedStaffMember && deleteStaffMember(selectedStaffMember);
        setOpenDelete(false);
    }

    const handleEditStaffMember = () => {
        const member = currentOffice?.staff.filter(member => member.id === selectedStaffMember)[0];

        setTimeout(() => {
            setSelectedMemberForEdit(member)
            setOpenEditStaffMember(true);
        }, 500);
    }

    const handleCloseEdit = () => {
        setOpenEditStaffMember(false);
        setOpenOptions(false);
    }

    return(
        <>
        <div className="staff-list">
            <div>
                <h3>Staff Members in Office</h3>
                <p>{ staffList.length }</p>
            </div>
            <div>
                {
                    staffList.map(staffMember => (
                        <div key={staffMember.id}>
                            <Image src={staffMember.avatar} alt={staffMember.avatar} width={52} height={52} />
                            <p>{`${staffMember.firstName} ${staffMember.lastName}`}</p>
                            <OptionsIcon onClick={() => handleSelectedStaffMember(staffMember.id)} />
                        </div>
                    ))
                }
            </div>
        </div>
        <Modal open={openOptions} onClose={() => setOpenOptions(false)}>
            <div className="staff-list__modal">
                <Button onClick={handleEditStaffMember}>Edit Staff Member</Button>
                <Button text onClick={handleDeletePrompt}>Delete Staff Member</Button>
            </div>
        </Modal>
        <DeleteModal
            open={openDelete}
            onClose={() => setOpenDelete(false)}
            onDelete={handleDeleteStaffMember}
            onBack={handleBack}
        />
        <StaffInfoModal
            open={openEditStaffMember}
            onClose={handleCloseEdit}
            setStaffResults={setStaffList}
            staffMember={selectedMemberForEdit}
            edit
        />
        </>
    )
}