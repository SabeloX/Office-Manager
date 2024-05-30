'use client';

import { PageTitle } from '@/components/page-title/PageTitle';

import './office-page.css';

import { OfficeBlock } from '@/components/office-block/OfficeBlock';
import { useCookies } from 'react-cookie';
import { Office, Staff } from '@/interfaces';
import { Search } from '@/components/search/Search';
import { StaffList } from '@/components/staff-list/StaffList';
import { Addbutton } from '@/components/add-button/AddButton';
import { useState } from 'react';
import { Modal } from '@/components/modal/Modal';

export const OfficePage = () => {
    const [cookies] = useCookies<'currentOffice', { currentOffice: Office }>(['currentOffice']);
    const [staffResults, setStaffResults] = useState<Staff[]>(cookies.currentOffice.staff);
    const [open, setOpen] = useState<boolean>(false);

    const handleSearch = (results: string) => {
        const filteredStaff = cookies.currentOffice.staff.filter(staffMember => `${staffMember.firstName} ${staffMember.lastName}`.toLowerCase().includes(results));
        setStaffResults(filteredStaff);
    }

    return (
        <div className="office-page">
            <PageTitle title='Office' />
            <OfficeBlock office={cookies.currentOffice} />
            <Search onSearch={handleSearch}/>
            <StaffList staffList={staffResults} />
            <Addbutton onClick={() => setOpen(true)} />
            <Modal open={open} onClose={() => setOpen(false)} />
        </div>
    );
}