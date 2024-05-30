import { Addbutton } from "@/components/add-button/AddButton";
import { OfficeBlock } from "../../components/office-block/OfficeBlock";
import { Office } from "../../interfaces/office.interface";

import './landing-page.css';

interface Props {
    offices: Office[];
}

export const LandingPage = ({ offices }: Props) => (
    <div className="office">
        <h2>All Offices</h2>
        <ul>
            {
                offices.map((office) => (
                    <li key={office.id + office.name}>
                        <OfficeBlock
                            office={office}
                        />
                    </li>
                ))
            }
        </ul>
        <Addbutton />
    </div>
);