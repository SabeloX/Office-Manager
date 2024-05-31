import { Addbutton } from "@/components/add-button/AddButton";
import { OfficeBlock } from "../../components/office-block/OfficeBlock";
import { Office } from "../../interfaces/office.interface";

import './landing-page.css';
import { useAppOffices } from "@/context/Office.context";

export const LandingPage = () => {
    const { offices } = useAppOffices();

    return(
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
}