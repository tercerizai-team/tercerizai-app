import { createContext, useState, useEffect } from "react";
import { userAddresses } from "../database/database";

export const AddressesContext = createContext([]);

export const AddressesProvider = ({children}) => {

    const [dbAddresses, setDbAddresses] = useState([]);

    useEffect(() => {
        setDbAddresses(userAddresses)
    }, [])

    return (
        <AddressesContext.Provider value={{dbAddresses, setDbAddresses}}>
            {children}
        </AddressesContext.Provider>
    )
}