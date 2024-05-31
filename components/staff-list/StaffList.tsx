import { Staff } from "@/interfaces";
import Image from "next/image";

import './staff-list.css';
import { ArrowLeftIcon, OptionsIcon } from "@/icons";
import { Modal } from "../modal/Modal";
import { Dispatch, SetStateAction, useState } from "react";
import { Button } from "../button/Button";
import { useAppOffices } from "@/context/Office.context";
import { StaffInfoModal } from "../staff-info-modal/StaffInfoModal";

interface Props {
    staffList: Staff[];
    setStaffList: Dispatch<SetStateAction<Staff[] | undefined>>;
}

export const StaffList = ({ staffList, setStaffList }: Props) => {
    const [openOptions, setOpenOptions] = useState<boolean>(false);
    const [openDelete, setOpenDelete] = useState<boolean>(false);
    const [selectedStaffMember, setSelectedStaffMember] = useState<string>();
    const [openEditStaffMember, setOpenEditStaffMember] = useState<boolean>(false);

    const { deleteStaffMember } = useAppOffices();

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
                <Button onClick={() => setOpenEditStaffMember(true)}>Edit Staff Member</Button>
                <Button text onClick={handleDeletePrompt}>Delete Staff Member</Button>
            </div>
        </Modal>
        <Modal open={openDelete} onClose={() => setOpenDelete(false)}>
            <div className="staff-list__delete-modal">
                <div>
                    <ArrowLeftIcon onClick={handleBack} />
                    <h4>Are you sure you want to Delete Staff Member?</h4>
                </div>
                <div>
                    <Button onClick={handleDeleteStaffMember}>delete staff member</Button>
                    <Button text onClick={() => setOpenDelete(false)}>keep staff member</Button>
                </div>
            </div>
        </Modal>
        <StaffInfoModal
            open={openEditStaffMember}
            setOpen={setOpenEditStaffMember}
            setStaffResults={setStaffList}
        />
        </>
    )
}