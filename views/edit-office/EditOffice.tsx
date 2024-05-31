'use client';

import { useAppOffices } from "@/context/Office.context"
import { AddOffice } from "../add-office/AddOffice"

export const EditOffice = () => {
    const { currentOffice } = useAppOffices();

    return(
        <AddOffice currentOffice={currentOffice} edit />
    )
}