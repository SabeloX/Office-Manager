import { StaffIcon } from "@/icons/StaffIcon";
import { OfficeDetails } from "../../interfaces/office-details.interface";

import './office-block.css';
import { ArrowDown } from "@/icons/ArrowDown";
import { EditIcon } from "@/icons/EditIcon";
import { PhoneIcon } from "@/icons/PhoneIcon";
import { EmailIcon } from "@/icons/EmailIcon";
import { CapacityIcon } from "@/icons/CapacityIcon";
import { AddressIcon } from "@/icons/AddressIcon";
import { useState } from "react";
import { Office } from "@/interfaces/office.interface";
import { useRouter } from "next/navigation";
import { useCookies } from "react-cookie";
import { useAppOffices } from "@/context/Office.context";

interface Props {
    office: Office;
}

export const OfficeBlock = ({ office }: Props) => {
    const [viewMore, setViewMore] = useState<boolean>(false);
    const { setCurrentOffice } = useAppOffices();

    const { push } = useRouter();

    const handleNavigate = () => {
        setCurrentOffice(office);
        push('/office');
    }

    const handleEditOffice = () => {
        setCurrentOffice(office);
        push('/edit-office');
    }

    return (
        <div
            className="office-block"
            style={{
                height: viewMore ? 320 : 142
            }}
        >
            <span 
                className="office-block__sidebar"
                style={{
                    backgroundColor: office.color
                }}
            ></span>
            <div className="office-block__info">
                <h3 onClick={handleNavigate}>{ office.name }</h3>
                <EditIcon onClick={handleEditOffice} className="office-block__edit" />
                <div>
                    <StaffIcon />
                    <p><span>{ office.totalStaff }</span> Staff Members in Office</p>
                </div>
                <div onClick={() => setViewMore(viewMore => !viewMore)}>
                    <p>More</p>
                    <ArrowDown className={`office-block__arrow-${viewMore ? 'up' : 'down'}`} />
                </div>
                <OfficeBlockDetails details={office.details} />
            </div>
        </div>
    );
}

interface OfficeDetailsProps {
    details: OfficeDetails;
}

const OfficeBlockDetails = ({ details }: OfficeDetailsProps ) => (
    <ul className="office-block__details">
        <li>
            <PhoneIcon />
            <p>{details?.contactNumber}</p>
        </li>
        <li>
            <EmailIcon />
            <p>{details?.email}</p>
        </li>
        <li>
            <CapacityIcon />
            <p>Office Capacity: {details?.capacity}</p>
        </li>
        <li>
            <AddressIcon />
            <p>{details?.address}</p>
        </li>
    </ul>
);