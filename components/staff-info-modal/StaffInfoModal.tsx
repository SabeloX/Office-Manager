import { useAppOffices } from "@/context/Office.context";
import { Avatar, Office, Staff } from "@/interfaces";
import { Dispatch, ReactNode, SetStateAction, useState } from "react";
import { Modal } from "../modal/Modal";
import { ArrowLeftIcon } from "@/icons";
import { CloseIcon } from "@/icons/CloseIcon";
import { InputField } from "../input-field/InputField";
import { Steps } from "../steps/Steps";
import { Button } from "../button/Button";
import Image from "next/image";
import { avatars } from "@/data/avatars";

interface Props {
    open: boolean;
    setOpen: (open: boolean) => void;
    setStaffResults: Dispatch<SetStateAction<Staff[] | undefined>>;
    name?: string;
    surname?: string;
    avatarValue?: Avatar;
}

export const StaffInfoModal = ({
    open,
    setOpen,
    setStaffResults,
    name = '',
    surname = '',
    avatarValue
}: Props) => {
    const { currentOffice, setCurrentOffice } = useAppOffices();
    const [step, setStep] = useState<number>(0);

    const [firstName, setFirstName] = useState<string>(name);
    const [lastName, setLastName] = useState<string>(surname);
    const [selectedAvatar, setAvatar] = useState<Avatar | undefined>(avatarValue);

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
    
    const StepComponents = (): ReactNode => {
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
                        setAvatar={setAvatar}
                        selectedAvatar={selectedAvatar}
                    />
                );
        }
    }

    return(
        <Modal open={open} onClose={() => setOpen(false)}>
            <div>
                {step === 1 && <ArrowLeftIcon onClick={() => setStep(0)} />}
                <h3>New Staff Member</h3>
                <CloseIcon onClick={() => setOpen(false)} />
            </div>
            { StepComponents() }
        </Modal>
    )
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
    selectedAvatar: Avatar | undefined;
    setAvatar: Dispatch<SetStateAction<Avatar | undefined>>;
}

const StepTwo = ({ step, addStaffMember, selectedAvatar, setAvatar }: StepTwoProps) => {
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