'use client';

import { PageTitle } from '@/components/page-title/PageTitle';
import './add-office.css';
import { InputField } from '@/components/input-field/InputField';
import { ChooseColor } from '@/components/choose-color/ChooseColor';
import { Button } from '@/components/button/Button';

export const AddOffice = () => {
    return (
        <div className="add-office">
            <PageTitle title="New Office" />
            <div className="add-office__info">
                <InputField placeholder="Office Name" />
                <InputField placeholder="Physical Address" />
                <InputField placeholder="Email Address" />
                <InputField placeholder="Phone Number" />
                <InputField placeholder="Maximum Capacity " />
            </div>
            <div className="add-office__choose-color">
                <h3>Office Colour</h3>
                <ChooseColor />
            </div>
            <div>
                <Button>Add Office</Button>
            </div>
        </div>
    )
}