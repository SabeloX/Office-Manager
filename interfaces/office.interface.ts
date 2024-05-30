import { Colors } from "./colors.enum";
import { OfficeDetails } from "./office-details.interface";
import { Staff } from "./staff.interface";

export interface Office {
    id: string;
    details: OfficeDetails;
    name: string;
    totalStaff: number;
    color: Colors;
    staff: Staff[];
}