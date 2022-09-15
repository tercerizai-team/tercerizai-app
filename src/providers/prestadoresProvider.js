import { createContext, useState, useEffect } from "react";
import { baseUrl, prestadores } from "../database/database";
import axios from "axios";


export const PrestadoresContext = createContext([]);

export const PrestadoresProvider = ({ children }) => {

    const [dbPrestadores, setDbPrestadores] = useState([]);

    useEffect(() => {

        axios.get(`${baseUrl}/providers`).then((res) => setDbPrestadores(res.data)).catch((err) => console.log(err))

        // setDbPrestadores(prestadores)
    },[])

    return (
        <PrestadoresContext.Provider value={{dbPrestadores, setDbPrestadores}}>
            {children}
        </PrestadoresContext.Provider>
    )
}