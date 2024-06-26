interface Props {
    onClick: () => void;
}

export const OptionsIcon = ({ onClick }: Props) => (
    <svg onClick={onClick} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M12.5 7C13.6 7 14.5 6.1 14.5 5C14.5 3.9 13.6 3 12.5 3C11.4 3 10.5 3.9 10.5 5C10.5 6.1 11.4 7 12.5 7ZM12.5 10C11.4 10 10.5 10.9 10.5 12C10.5 13.1 11.4 14 12.5 14C13.6 14 14.5 13.1 14.5 12C14.5 10.9 13.6 10 12.5 10ZM10.5 19C10.5 17.9 11.4 17 12.5 17C13.6 17 14.5 17.9 14.5 19C14.5 20.1 13.6 21 12.5 21C11.4 21 10.5 20.1 10.5 19Z" fill="#22282F"/>
    </svg>
);