import { BookingDiv, ProviderContainer } from "./styles";
import { useContext, useEffect } from "react";
import { PrestadoresContext } from "../../providers/prestadoresProvider";
import { HeaderPrestador } from "./styles";
import { useState } from "react";
import 'react-calendar/dist/Calendar.css';

import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { MenuItem, Select } from "@mui/material";
import { AddressesContext } from "../../providers/userAddresses.provider";
import { SchedulesContext } from "../../providers/schedules";
import { useParams } from "react-router-dom";
import { profilePhoto } from "../../database/database";



function ProviderPage(props) {

  const {dbAddresses} = useContext(AddressesContext)
  const {createSchedule} = useContext(SchedulesContext)

  const [detailsSchedule, setDetailsSchedule] = useState('')
  const [userAddress, setUserAddress] = useState('Selecione')

  const [value, setValue] = useState(null);
  const [valueHour, setValueHour] = useState(null)

  const handleAddress = (event) => {
    setUserAddress(event.target.value)
  }

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const handleSchedule = () => {

    createSchedule({
      hour: `${valueHour.$H}:${valueHour.$m}`,
      serviceDate: `${value.$y}-${value.$M+1}-${value.$D}`,
      description: detailsSchedule,
      value: 50,
      providerId: idSeller,
      addressId: userAddress
    })
  }

  const { idSeller } = props.idSeller;

  const { dbPrestadores } = useContext(PrestadoresContext);

  const prestador = dbPrestadores.find((elem) => elem.id === idSeller);
  console.log(prestador)

  return (
    <ProviderContainer>
        <HeaderPrestador>
            <img src={prestador?.imageUrl === null? profilePhoto : prestador?.imageUrl} alt={prestador?.name}/>
            <div>
                <p className="prestadorName">{prestador?.name}</p>
                <p className="prestadorCategory">{prestador?.email}</p>
            </div>
        </HeaderPrestador>

      <BookingDiv>
        <div className="BookingDiv1">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Stack spacing={3}>
              <DesktopDatePicker
                label="Selecione a data"
                inputFormat="DD/MM/YYYY"
                value={value}
                onChange={handleChange}
                renderInput={(params) => <TextField {...params} />}
              />
          
              <TimePicker
                label="Selecione o horário"
                value={valueHour}
                onChange={setValueHour}
                renderInput={(params) => <TextField {...params} />}
              />
            </Stack>
          </LocalizationProvider>
        </div>
        <div className="BookingDiv2">
          <TextField
              id="outlined-multiline-static"
              label="Descreva o serviço"
              multiline
              rows={2}
              value={detailsSchedule}
              onChange={(event) => {
                setDetailsSchedule(event.target.value)
              }}
          />
          <Select
                    
                    labelId="uf-label"
                    id="uf"
                    label="UF"
                    value={userAddress}
                    displayEmpty
                    sx={{ minWidth: 225 }}
                    onChange={(e) => {handleAddress(e)}}
                >
                    <MenuItem value={'Selecione'}>Selecione</MenuItem>
                    {dbAddresses.map((elem) => (
                      <MenuItem key={elem.id} value={elem.address.id}>{elem.address.street}</MenuItem>
                    ))}
                </Select>
          <button className="btnConfirmSchedule" onClick={() => handleSchedule()}>Agendar</button>
        </div>
    </BookingDiv>





    </ProviderContainer>
  );
}

export default ProviderPage;
