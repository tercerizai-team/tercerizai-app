import axios from "axios";
import { createContext, useState, useEffect } from "react";
import { baseUrl, userAddresses, userToken } from "../database/database";

export const AddressesContext = createContext([]);

export const AddressesProvider = ({children}) => {

    const userId = localStorage.getItem('userId')
    const userToken = localStorage.getItem('token')

    const [dbAddresses, setDbAddresses] = useState([]);
    
    const registerNewAddress = async (data) => {
        let response = false
        await axios.post(`${baseUrl}/address`, data, {
            headers: {
                Authorization: `Bearer ${userToken}`,
            }
        })
            .then((res) => {
                response = true
                refreshAddress()})
            .catch((err) => console.log(err))
            
    return response

    }

    const deleteAddress = (idAddress) => {

        axios.delete(`${baseUrl}/address/${idAddress}`, {
            headers: {
                Authorization: `Bearer ${userToken}`
            }
        })
        .then((res) => refreshAddress())
        .catch((err) => console.log(err))
    }

    const refreshAddress = () => {
        
        axios.get(`${baseUrl}/address`, {
            headers: {
                Authorization: `Bearer ${userToken}`,
            }
        })
            .then((res) => setDbAddresses(res.data))
            .catch((err) => console.log(err))

    }

    useEffect(() => {

        refreshAddress()

    }, [])

    return (

        <AddressesContext.Provider value={{
            dbAddresses,
            setDbAddresses,
            registerNewAddress,
            deleteAddress,
            refreshAddress
            }}>

            {children}

        </AddressesContext.Provider>
    )
}