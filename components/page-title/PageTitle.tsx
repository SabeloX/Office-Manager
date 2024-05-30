import { ArrowLeftIcon } from "@/icons/ArrowLeftIcon";

import './page-title.css';

interface Props {
    title: string;
}

export const PageTitle = ({ title }: Props) => (
    <div className="page-title">
        <ArrowLeftIcon />
        <p>{ title }</p>
    </div>
)