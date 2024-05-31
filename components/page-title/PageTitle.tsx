'use client';

import { ArrowLeftIcon } from "@/icons/ArrowLeftIcon";

import './page-title.css';
import { useRouter } from "next/navigation";

interface Props {
    title: string;
    backLink?: string;
}

export const PageTitle = ({ title, backLink }: Props) => {
    const { push, back } = useRouter();

    return(
        <div className="page-title">
            <ArrowLeftIcon onClick={() => backLink ? push(backLink) : back()} />
            <p>{ title }</p>
        </div>
    );
}