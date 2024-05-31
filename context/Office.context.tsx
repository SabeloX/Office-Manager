import { offices } from "@/data/offices";
import { Office } from "@/interfaces";
import { PropsWithChildren, createContext, useContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";

interface AppContextType {
    offices: Office[];
    currentOffice: Office | undefined;
    setOffices: (offices: Office[]) => void;
    setCurrentOffice: (currentOffice: Office) => void;
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

    return(
        <AppContext.Provider
            value={{
                offices: officesList,
                currentOffice,
                setOffices,
                setCurrentOffice: setCurrentOfficeMeth
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useAppOffices = () => useContext(AppContext);