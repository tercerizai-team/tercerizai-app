import axios from "axios";
import { createContext, useState, useEffect } from "react";
import { baseUrl, schedules } from "../database/database";

export const SchedulesContext = createContext([]);

export const SchedulesProdiver = ({ children }) => {
  const [dbSchedules, setDbSchedules] = useState([]);

  const userId = localStorage.getItem("userId");
  const userToken = localStorage.getItem("token");

  const createSchedule = async (data) => {
    const response = await axios
      .post(`${baseUrl}/schedule`, data, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
      .then((res) => true)
      .catch((err) => {
        console.log(err);
        return false;
      });

    return response;
  };

  const deleteSchedule = async (id) => {
    const response = await axios
      .delete(`${baseUrl}/schedule/${id}`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
      .then((res) => {
        listSchedules();
        return true;
      })
      .catch((err) => {
        console.log(err);
        return false;
      });
    return response;
  };

  const listSchedules = () => {
    axios
      .get(`${baseUrl}/users/${userId}`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
      .then((res) => setDbSchedules(res.data.schedules))
      .catch((err) => console.log(err));
  };

  return (
    <SchedulesContext.Provider
      value={{
        dbSchedules,
        setDbSchedules,
        createSchedule,
        deleteSchedule,
        listSchedules,
      }}
    >
      {children}
    </SchedulesContext.Provider>
  );
};
