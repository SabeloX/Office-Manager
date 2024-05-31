'use client';

import { Addbutton } from "@/components/add-button/AddButton";
import { OfficeBlock } from "../../components/office-block/OfficeBlock";

import './landing-page.css';
import { useAppOffices } from "@/context/Office.context";
import { useRouter } from "next/navigation";

export const LandingPage = () => {
    const { offices } = useAppOffices();
    const { push } = useRouter();

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
            <Addbutton onClick={() => push('/add-office')} />
        </div>
    );
}