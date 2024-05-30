import { Staff } from "@/interfaces";
import Image from "next/image";

import './staff-list.css';
import { OptionsIcon } from "@/icons";

interface Props {
    staffList: Staff[];
}

export const StaffList = ({ staffList }: Props) => (
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
                        <OptionsIcon />
                    </div>
                ))
            }
        </div>
    </div>
);