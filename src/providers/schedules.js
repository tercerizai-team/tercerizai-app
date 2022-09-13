import { createContext, useState, useEffect } from "react";
import { schedules } from "../database/database";

export const SchedulesContext = createContext([]);

export const SchedulesProdiver = ({children}) => {

    const [dbSchedules, setDbSchedules] = useState([])

    useEffect(() => {
        setDbSchedules(schedules)
    }, [])

    return (
        <SchedulesContext.Provider value={{dbSchedules, setDbSchedules}}>
            {children}
        </SchedulesContext.Provider>
    )
}