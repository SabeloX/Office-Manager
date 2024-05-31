'use client';

import { PageTitle } from '@/components/page-title/PageTitle';

import './office-page.css';

import { OfficeBlock } from '@/components/office-block/OfficeBlock';
import { Staff } from '@/interfaces';
import { Search } from '@/components/search/Search';
import { StaffList } from '@/components/staff-list/StaffList';
import { Addbutton } from '@/components/add-button/AddButton';
import { useEffect, useState } from 'react';

import { useAppOffices } from '@/context/Office.context';
import { StaffInfoModal } from '@/components/staff-info-modal/StaffInfoModal';

export const OfficePage = () => {
    const { currentOffice } = useAppOffices();
    const [staffResults, setStaffResults] = useState<Staff[]>();
    const [open, setOpen] = useState<boolean>(false);

    useEffect(() => {
        setStaffResults(currentOffice?.staff);
    },[currentOffice]);

    const handleSearch = (results: string) => {
        const filteredStaff = currentOffice?.staff.filter(staffMember => 
            `${staffMember.firstName} ${staffMember.lastName}`.toLowerCase().includes(results)
        );
        setStaffResults(filteredStaff as Staff[]);
    }

    return (
        <div className="office-page">
            <PageTitle backLink="/" title='Office' />
            <div>
                {currentOffice && <OfficeBlock office={currentOffice} />}
                <div>
                    <Search onSearch={handleSearch} />
                    {staffResults && <StaffList setStaffList={setStaffResults} staffList={staffResults} />}
                </div>
                <Addbutton onClick={() => setOpen(true)} />
                <StaffInfoModal open={open} onClose={() => setOpen(false)} setStaffResults={setStaffResults} />
            </div>
        </div>
    );
}