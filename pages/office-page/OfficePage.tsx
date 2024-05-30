'use client';

import { PageTitle } from '@/components/page-title/PageTitle';

import './office-page.css';

import { OfficeBlock } from '@/components/office-block/OfficeBlock';
import { useCookies } from 'react-cookie';
import { Office } from '@/interfaces';
import { Search } from '@/components/search/Search';
import { StaffList } from '@/components/staff-list/StaffList';
import { Addbutton } from '@/components/add-button/AddButton';

export const OfficePage = () => {
    const [cookies] = useCookies<'currentOffice', { currentOffice: Office }>(['currentOffice']);

    return (
        <div className="office-page">
            <PageTitle title='Office' />
            <OfficeBlock office={cookies.currentOffice} />
            <Search />
            <StaffList staffList={cookies.currentOffice.staff} />
            <Addbutton />
        </div>
    );
}