interface Props {
    onClick?: () => void;
}

export const CloseIcon = ({ onClick }: Props) => (
    <svg onClick={onClick} width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22.5C17.5 22.5 22 18 22 12.5C22 7 17.5 2.5 12 2.5C6.5 2.5 2 7 2 12.5C2 18 6.5 22.5 12 22.5Z" stroke="#0D4477" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9.16998 15.33L14.83 9.67" stroke="#0D4477" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14.83 15.33L9.16998 9.67" stroke="#0D4477" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);