import { createContext, useState, useEffect } from "react";
import { prestadores } from "../database/database";


export const PrestadoresContext = createContext([]);

export const PrestadoresProvider = ({ children }) => {

    const [dbPrestadores, setDbPrestadores] = useState([]);

    useEffect(() => {
        setDbPrestadores(prestadores)
    },[])

    return (
        <PrestadoresContext.Provider value={{dbPrestadores, setDbPrestadores}}>
            {children}
        </PrestadoresContext.Provider>
    )
}