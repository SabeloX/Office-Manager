import { Colors } from "./colors.enum";
import { OfficeDetails } from "./office-details.interface";

export interface Office {
    id: string;
    details: OfficeDetails;
    name: string;
    totalStaff: number;
    color: Colors;
}