import axios from "axios";
import { createContext, useState, useEffect } from "react";
import { baseUrl, schedules, userToken } from "../database/database";

export const SchedulesContext = createContext([]);

export const SchedulesProdiver = ({ children }) => {
  const [dbSchedules, setDbSchedules] = useState([]);

  useEffect(() => {
    setDbSchedules(schedules);
  }, []);

  const createSchedule = async (data) => {
    let response = false;
    await axios
      .post(`${baseUrl}/schedule`, (data), {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
      .then((res) => {
        response = true;
      })
      .catch((err) => console.log(err));

    return response;
  };

  return (
    <SchedulesContext.Provider value={{ dbSchedules, setDbSchedules, createSchedule }}>
      {children}
    </SchedulesContext.Provider>
  );
};
