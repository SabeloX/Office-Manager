import { SearchIcon } from '@/icons/SearchIcon';
import './search.css';

export const Search = () => (
    <div className="search">
        <input placeholder="Search" />
        <SearchIcon />
    </div>
);