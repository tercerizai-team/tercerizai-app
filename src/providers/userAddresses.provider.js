import axios from "axios";
import { createContext, useState, useEffect } from "react";
import { baseUrl, userAddresses, userToken } from "../database/database";

export const AddressesContext = createContext([]);

export const AddressesProvider = ({children}) => {

    const [dbAddresses, setDbAddresses] = useState([]);
    const [newAddress, setNewAddress] = useState({})

    const registerNewAddress = () => {

        axios.post(`${baseUrl}/address`, newAddress, {
            headers: {
                Authorization: `Bearer ${userToken}`,
            }
        })
            .then((res) => console.log(res))
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        setDbAddresses(userAddresses)
    }, [])

    return (

        <AddressesContext.Provider value={{
            dbAddresses,
            setDbAddresses,
            newAddress,
            setNewAddress,
            registerNewAddress
            }}>

            {children}

        </AddressesContext.Provider>
    )
}