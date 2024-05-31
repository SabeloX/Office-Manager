import { offices } from "@/data/offices";
import { Office, Staff } from "@/interfaces";
import { PropsWithChildren, createContext, useContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";

interface AppContextType {
    offices: Office[];
    currentOffice: Office | undefined;
    setOffices: (offices: Office[]) => void;
    setCurrentOffice: (currentOffice: Office) => void;
    deleteStaffMember: (staffMemberId: string) => void;
    editStaffMember: (staffMember: Staff) => void;
    addNewOffice: (office: Office) => void;
}

const AppContext = createContext<AppContextType>({} as AppContextType);

export const AppOfficeProvider = ({ children }: PropsWithChildren) => {
    const [officesList, setOfficesList] = useState<Office[]>([]);
    const [cookies, setCookies] = useCookies(['offices', 'currentOffice']);
    const [currentOffice, setCurrentOffice] = useState<Office>();

    useEffect(() => {
        if(!cookies.offices){
            setCookies('offices', offices);
        }
        else{
            setOfficesList(cookies.offices);
        }

        if(cookies.currentOffice){
            setCurrentOffice(cookies.currentOffice);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cookies.offices]);

    const setOffices = (offices: Office[]) => {
        setCookies('offices', offices);
        setOfficesList(offices);
    }

    const setCurrentOfficeMeth = (currentOffice: Office) => {
        setOffices(officesList.map(office => {
            if(office.id === currentOffice.id){
                return currentOffice;
            }
            return office;
        }));
        setCookies('currentOffice', currentOffice);
        setCurrentOffice(currentOffice);
    }

    const deleteStaffMember = (staffMemberId: string) => {
        const newStaffMembers = currentOffice?.staff.filter(member => member.id !== staffMemberId);
        setCurrentOfficeMeth({...(currentOffice as Office), staff: newStaffMembers as Staff[]})
    }

    const editStaffMember = (staffMember: Staff) => {
        const newStaff = currentOffice?.staff.map(member => {
            if(member.id === staffMember.id){
                return staffMember;
            }
            return member;
        });

        setCurrentOfficeMeth({...(currentOffice as Office), staff: newStaff as Staff[]});
    }

    const addNewOffice = (office: Office) => {
        setOffices([office ,...officesList]);
    }

    return(
        <AppContext.Provider
            value={{
                offices: officesList,
                currentOffice,
                setOffices,
                setCurrentOffice: setCurrentOfficeMeth,
                deleteStaffMember,
                editStaffMember,
                addNewOffice
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useAppOffices = () => useContext(AppContext);