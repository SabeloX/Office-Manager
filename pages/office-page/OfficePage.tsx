'use client';

import { PageTitle } from '@/components/page-title/PageTitle';

import './office-page.css';

import { OfficeBlock } from '@/components/office-block/OfficeBlock';
import { useCookies } from 'react-cookie';
import { Office, Staff } from '@/interfaces';
import { Search } from '@/components/search/Search';
import { StaffList } from '@/components/staff-list/StaffList';
import { Addbutton } from '@/components/add-button/AddButton';
import { Dispatch, ReactNode, SetStateAction, useState } from 'react';
import { Modal } from '@/components/modal/Modal';
import { CloseIcon } from '@/icons/CloseIcon';
import { InputField } from '@/components/input-field/InputField';
import { Button } from '@/components/button/Button';
import { Steps } from '@/components/steps/Steps';

export const OfficePage = () => {
    const [cookies] = useCookies<'currentOffice', { currentOffice: Office }>(['currentOffice']);
    const [staffResults, setStaffResults] = useState<Staff[]>(cookies.currentOffice.staff);
    const [open, setOpen] = useState<boolean>(false);
    const [step, setStep] = useState<number>(0);


    const handleSearch = (results: string) => {
        const filteredStaff = cookies.currentOffice.staff.filter(staffMember => `${staffMember.firstName} ${staffMember.lastName}`.toLowerCase().includes(results));
        setStaffResults(filteredStaff);
    }

    const Steps = (): ReactNode => {
        switch(step){
            default:
            case 0:
                return <StepOne step={step} setStep={setStep} />;
            case 1:
                return <StepTwo />;
        }
    }

    return (
        <div className="office-page">
            <PageTitle title='Office' />
            <OfficeBlock office={cookies.currentOffice} />
            <Search onSearch={handleSearch}/>
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
}

const StepOne = ({ step, setStep }: StepOneProps) => {
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
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
    <>
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
                <small>{ validationError && 'Enter both fields to proceed.' }</small>
            </div>
            <Steps numberOfSteps={2} activeStep={step} />
            <Button onClick={handleNextStep}>Next</Button>
        </form>
    </>
    );
}

const StepTwo = () => {
    return (
        <></>
    );
}