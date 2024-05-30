import { SearchIcon } from '@/icons/SearchIcon';
import './search.css';
import { ChangeEvent, useState } from 'react';

interface Props {
    onSearch: (value: string) => void;
}

export const Search = ({ onSearch }: Props) => (
    <div className="search">
        <input onChange={(event: ChangeEvent<HTMLInputElement>) => onSearch(event.target.value.toLowerCase())} placeholder="Search" />
        <SearchIcon />
    </div>
);