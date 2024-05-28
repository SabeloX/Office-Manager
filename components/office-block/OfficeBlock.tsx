import { StaffIcon } from "@/icons/StaffIcon";
import { OfficeDetails } from "../../interfaces/office-details";

import './office-block.css';
import { ArrowDown } from "@/icons/ArrowDown";
import { EditIcon } from "@/icons/EditIcon";

interface Props {
    name: string;
    totalStaff: number;
    details: OfficeDetails;
}

export const OfficeBlock = ({ name, totalStaff, details }: Props) => {
    return (
        <div className="office-block">
            <span className="office-block__sidebar"></span>
            <div className="office-block__info">
                <h3>{ name }</h3>
                <EditIcon className="office-block__edit" />
                <div>
                    <StaffIcon />
                    <p><span>{ totalStaff }</span> Staff Members in Office</p>
                </div>
                <div>
                    <p>More</p>
                    <ArrowDown />
                </div>
            </div>
        </div>
    )
}