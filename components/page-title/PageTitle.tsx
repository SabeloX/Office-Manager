import { ArrowLeftIcon } from "@/icons/ArrowLeftIcon";

import './page-title.css';
import { useRouter } from "next/navigation";

interface Props {
    title: string;
}

export const PageTitle = ({ title }: Props) => {
    const { back } = useRouter();

    return(
        <div className="page-title">
            <ArrowLeftIcon onClick={() => back()} />
            <p>{ title }</p>
        </div>
    );
}