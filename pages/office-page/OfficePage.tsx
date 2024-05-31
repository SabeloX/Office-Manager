'use client';

import { PageTitle } from '@/components/page-title/PageTitle';

import './office-page.css';

import { OfficeBlock } from '@/components/office-block/OfficeBlock';
import { Avatar, Office, Staff } from '@/interfaces';
import { Search } from '@/components/search/Search';
import { StaffList } from '@/components/staff-list/StaffList';
import { Addbutton } from '@/components/add-button/AddButton';
import { Dispatch, ReactNode, SetStateAction, useState } from 'react';
import { Modal } from '@/components/modal/Modal';
import { CloseIcon } from '@/icons/CloseIcon';
import { InputField } from '@/components/input-field/InputField';
import { Button } from '@/components/button/Button';
import { Steps } from '@/components/steps/Steps';
import { avatars } from '@/data/avatars';
import Image from 'next/image';

import { useAppOffices } from '@/context/Office.context';

export const OfficePage = () => {
    const { setCurrentOffice, currentOffice } = useAppOffices();
    const [staffResults, setStaffResults] = useState<Staff[]>(currentOffice?.staff ?? []);
    const [open, setOpen] = useState<boolean>(false);
    const [step, setStep] = useState<number>(0);

    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');

    const handleSearch = (results: string) => {
        const filteredStaff = currentOffice?.staff.filter(staffMember => 
            `${staffMember.firstName} ${staffMember.lastName}`.toLowerCase().includes(results)
        ) ?? [];
        setStaffResults(filteredStaff);
    }

    const handleAddStaffMember = (avatar: Avatar) => {
        const newOffice = currentOffice && {
            ...currentOffice,
            staff: [
                ...currentOffice.staff,
                {
                    firstName,
                    lastName,
                    avatar,
                    id: `${currentOffice.staff.length + 1}`
                }
            ]
        }

        setCurrentOffice(newOffice as Office);
        setFirstName('');
        setLastName('');
        setStep(0);

        setStaffResults((newOffice as Office).staff);
        setOpen(false);
    }

    const Steps = (): ReactNode => {
        switch(step){
            default:
            case 0:
                return (
                    <StepOne
                        step={step}
                        setStep={setStep}
                        firstName={firstName}
                        setFirstName={setFirstName}
                        lastName={lastName}
                        setLastName={setLastName}
                    />
                );
            case 1:
                return (
                    <StepTwo
                        step={step}
                        addStaffMember={(avatar) => handleAddStaffMember(avatar)}
                    />
                );
        }
    }

    return (
        <div className="office-page">
            <PageTitle title='Office' />
            {currentOffice && <OfficeBlock office={currentOffice} />}
            <Search onSearch={handleSearch} />
            <StaffList staffList={staffResults} />
            <Addbutton onClick={() => setOpen(true)} />
            <Modal open={open} onClose={() => setOpen(false)}>
                <div>
                    <h3>New Staff Member</h3>
                    <CloseIcon onClick={() => setOpen(false)} />
                </div>
                { Steps() }
            </Modal>
        </div>
    );
}

interface StepOneProps {
    step: number;
    setStep: Dispatch<SetStateAction<number>>;
    firstName: string;
    lastName: string;
    setFirstName: (firstName: string) => void;
    setLastName: (lastName: string) => void;
}

const StepOne = ({ step, setStep, firstName, lastName, setFirstName, setLastName }: StepOneProps) => {
    const [validationError, setValidationError] = useState<boolean>(false);

    const handleNextStep = () => {
        if(firstName !== '' && lastName !== ''){
            setValidationError(false);
            setStep(currentStep => currentStep + 1);
        }
        else{
            setValidationError(true);
        }
    }

    return (
        <form>
            <div>
                <InputField 
                    placeholder='First name'
                    value={firstName}
                    onChange={(value) => setFirstName(value)}
                />
                <InputField
                    placeholder='Last name'
                    value={lastName}
                    onChange={(value) => setLastName(value)}
                />
                { validationError && <small>Enter both fields to proceed.</small>}
            </div>
            <Steps numberOfSteps={2} activeStep={step} />
            <Button onClick={handleNextStep}>Next</Button>
        </form>
    );
}

interface StepTwoProps {
    step: number;
    addStaffMember: (avatar: Avatar) => void;
}

const StepTwo = ({ step, addStaffMember }: StepTwoProps) => {
    const [selectedAvatar, setAvatar] = useState<Avatar>();
    const [validationError, setValidationError] = useState<boolean>(false);

    const handleAddAvatar = () => {
        if(selectedAvatar){
            addStaffMember(selectedAvatar);
            setAvatar(undefined);
        }
        else{
            setValidationError(true);
        }
    }

    return (
        <div className="office-page__choose-avatar">
            <h3>Avatar</h3>
            {validationError && <small>Choose an avatar.</small>}
            <div className="office-page__avatars">
                {
                    avatars.map((avatar, index) => (
                        <Image
                            width={52}
                            height={52}
                            alt={`avatar ${index}`} src={avatar} key={avatar}
                            onClick={() => setAvatar(avatar)}
                            style={{
                                border: selectedAvatar === avatar ? '4px solid #475569' : 'none'
                            }}
                        />
                    ))
                }
            </div>
            <Steps numberOfSteps={2} activeStep={step} />
            <Button onClick={handleAddAvatar}>update staff member</Button>
        </div>
    );
}