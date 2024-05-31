'use client';

import { PageTitle } from '@/components/page-title/PageTitle';
import './add-office.css';
import { InputField } from '@/components/input-field/InputField';
import { ChooseColor } from '@/components/choose-color/ChooseColor';
import { Button } from '@/components/button/Button';
import { useEffect, useState } from 'react';
import { Colors, Office } from '@/interfaces';
import { useAppOffices } from '@/context/Office.context';
import { useRouter } from 'next/navigation';

interface Props {
    currentOffice?: Office;
    edit?: boolean;
}

export const AddOffice = ({ currentOffice, edit }: Props) => {
    const [officeName, setOfficeName] = useState<string>('');
    const [physicalAddress, setPhysicalAddress] = useState<string>('');
    const [emailAddress, setEmailAddress] = useState<string>('');
    const [phoneNumber, setPhoneNumber] = useState<string>('');
    const [maxCapacity, setMaxCapacity] = useState<number>();
    const [officeColor, setOfficeColor] = useState<Colors>();

    useEffect(() => {
        if(edit && currentOffice){
            console.log(currentOffice)
            setOfficeColor(currentOffice.color);
            setOfficeName(currentOffice.name);
            setPhysicalAddress(currentOffice.details.address);
            setEmailAddress(currentOffice.details.email);
            setPhoneNumber(currentOffice.details.contactNumber);
            setMaxCapacity(currentOffice.details.capacity);
        }
    }, [currentOffice, edit]);

    const [validationError, setValidationError] = useState<boolean>(false);

    const { addNewOffice, offices, editOffice } = useAppOffices();

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
            
            if(edit && currentOffice){
                editOffice({
                    id: currentOffice.id,
                    staff: currentOffice.staff,
                    totalStaff: currentOffice.totalStaff,
                    color: officeColor,
                    name: officeName,
                    details: {
                        address: physicalAddress,
                        contactNumber: phoneNumber,
                        email: emailAddress,
                        capacity: maxCapacity
                    }
                })
            }
            else{
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
            }
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
                <InputField value={officeName} onChange={(value) => setOfficeName(value)} placeholder="Office Name" />
                <InputField value={physicalAddress} onChange={(value) => setPhysicalAddress(value)} placeholder="Physical Address" />
                <InputField value={emailAddress} onChange={(value) => setEmailAddress(value)} placeholder="Email Address" />
                <InputField value={phoneNumber} onChange={(value) => setPhoneNumber(value)} placeholder="Phone Number" />
                <InputField value={maxCapacity} type='number' onChange={(value) => setMaxCapacity(parseInt(value))} placeholder="Maximum Capacity " />
            </div>
            <div className="add-office__choose-color">
                <h3>Office Colour</h3>
                <ChooseColor setColor={setOfficeColor} selectedColor={officeColor} />
                {validationError && <small>Please fill in all fields and select a color for your office.</small>}
            </div>
            <div>
                <Button onClick={handleAddOffice}>{edit ? 'Update Office' : 'Add Office'}</Button>
            </div>
        </div>
    )
}