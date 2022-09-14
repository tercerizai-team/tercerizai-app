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





function ProviderPage(props) {

  const {dbAddresses} = useContext(AddressesContext)

  

  const [agendamento, setAgendamento] = useState({});
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

    setAgendamento({
      serviceDate: `${value.$y}-${value.$M+1}-${value.$D}`,
      hour: `${valueHour.$H}:${valueHour.$m}`,
      finishServiceHour: `${valueHour.$H+1}:${valueHour.$m}`,
      description: detailsSchedule,
      value: 0,
      providerId: idSeller,
      addressId: userAddress
    })
  }

  console.log(agendamento)


  const { idSeller } = props.idSeller;

  const newId = Number(idSeller)

  const { dbPrestadores } = useContext(PrestadoresContext);

  const prestador = dbPrestadores.find((elem) => elem.id === newId);

  return (
    <ProviderContainer>
        <HeaderPrestador>
            <img src={prestador?.imagem} alt={prestador?.name}/>
            <div>
                <p className="prestadorName">{prestador?.name}</p>
                <p className="prestadorCategory">{prestador?.category}</p>
            </div>
        </HeaderPrestador>
        {/* <CalendarPrestador>
            <h3>Selecione a melhor data para o serviço</h3>
            <Calendar onChange={onChange} value={value}/>
            <button onClick={handleSchedule} className="btnNextTime">Escolher horário</button>
        </CalendarPrestador> */}
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
                      <MenuItem key={elem.id} value={elem.id}>{elem.address.street}</MenuItem>
                    ))}
                </Select>
          <button className="btnConfirmSchedule" onClick={() => handleSchedule()}>Agendar</button>
        </div>
    </BookingDiv>





    </ProviderContainer>
  );
}

export default ProviderPage;
