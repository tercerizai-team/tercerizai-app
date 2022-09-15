import axios from "axios";
import { createContext, useState, useEffect } from "react";
import { baseUrl, schedules } from "../database/database";

export const SchedulesContext = createContext([]);

export const SchedulesProdiver = ({children}) => {

    const [dbSchedules, setDbSchedules] = useState([])

    const userId = localStorage.getItem('userId')
    const userToken = localStorage.getItem('token')

    useEffect(() => {
        axios.get(`${baseUrl}/users/${userId}`, {
            headers: {
                Authorization: `Bearer ${userToken}`
            }
        })
        .then((res) => setDbSchedules(res.data.schedules))
        .catch((err) => console.log(err))
        
    }, [])

    const deleteSchedule = (id) =>{
        axios.delete(`${baseUrl}/schedule/${id}`, {
            headers: {
                Authorization: `Bearer ${userToken}`
            }
        })
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
    }

    return (
        <SchedulesContext.Provider value={{dbSchedules, setDbSchedules, deleteSchedule}}>
            {children}
        </SchedulesContext.Provider>
    )
}