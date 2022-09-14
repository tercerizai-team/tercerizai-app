import axios from "axios";
import { createContext, useState, useEffect } from "react";
import { baseUrl, schedules, userToken } from "../database/database";

export const SchedulesContext = createContext([]);

export const SchedulesProdiver = ({children}) => {

    const [dbSchedules, setDbSchedules] = useState([])

    useEffect(() => {
        setDbSchedules(dbSchedules)
    }, [])

    return (
        <SchedulesContext.Provider value={{dbSchedules, setDbSchedules}}>
            {children}
        </SchedulesContext.Provider>
    )
}