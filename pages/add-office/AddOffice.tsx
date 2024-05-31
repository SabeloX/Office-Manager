'use client';

import { PageTitle } from '@/components/page-title/PageTitle';
import './add-office.css';
import { InputField } from '@/components/input-field/InputField';
import { ChooseColor } from '@/components/choose-color/ChooseColor';
import { Button } from '@/components/button/Button';
import { useState } from 'react';
import { Colors } from '@/interfaces';
import { useAppOffices } from '@/context/Office.context';
import { useRouter } from 'next/navigation';

export const AddOffice = () => {
    const [officeName, setOfficeName] = useState<string>('');
    const [physicalAddress, setPhysicalAddress] = useState<string>('');
    const [emailAddress, setEmailAddress] = useState<string>('');
    const [phoneNumber, setPhoneNumber] = useState<string>('');
    const [maxCapacity, setMaxCapacity] = useState<number>();
    const [officeColor, setOfficeColor] = useState<Colors>();

    const [validationError, setValidationError] = useState<boolean>(false);

    const { addNewOffice, offices } = useAppOffices();

    const { push } = useRouter();

    const handleAddOffice = () => {
        if(
            officeColor &&
            officeName !== '' &&
            physicalAddress !== '' &&
            emailAddress !== '' &&
            phoneNumber !== '' &&
            maxCapacity
        ){
            setValidationError(false);
            addNewOffice({
                id: `${offices.length + 1}`,
                staff: [],
                totalStaff: 0,
                color: officeColor,
                name: officeName,
                details: {
                    address: physicalAddress,
                    contactNumber: phoneNumber,
                    email: emailAddress,
                    capacity: maxCapacity
                }
            });
            push('/');
        }
        else{
            setValidationError(true);
        }
    }

    return (
        <div className="add-office">
            <PageTitle title="New Office" />
            <div className="add-office__info">
                <InputField onChange={(value) => setOfficeName(value)} placeholder="Office Name" />
                <InputField onChange={(value) => setPhysicalAddress(value)} placeholder="Physical Address" />
                <InputField onChange={(value) => setEmailAddress(value)} placeholder="Email Address" />
                <InputField onChange={(value) => setPhoneNumber(value)} placeholder="Phone Number" />
                <InputField type='number' onChange={(value) => setMaxCapacity(parseInt(value))} placeholder="Maximum Capacity " />
            </div>
            <div className="add-office__choose-color">
                <h3>Office Colour</h3>
                <ChooseColor setColor={setOfficeColor} selectedColor={officeColor} />
                {validationError && <small>Please fill in all fields and select a color for your office.</small>}
            </div>
            <div>
                <Button onClick={handleAddOffice}>Add Office</Button>
            </div>
        </div>
    )
}