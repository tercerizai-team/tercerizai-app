import { ProviderContainer } from "./styles";
import { useContext } from "react";
import { PrestadoresContext } from "../../providers/prestadoresProvider";
import { HeaderPrestador, CalendarPrestador } from "./styles";
import Calendar from 'react-calendar'
import { useState } from "react";
import 'react-calendar/dist/Calendar.css';

// teste

// import TextField from '@mui/material/TextField';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';

function ProviderPage(props) {

    // const [value, setValue] = useState(null);

  const [value, onChange] = useState(new Date());

  const { idSeller } = props.idSeller;

  const { dbPrestadores } = useContext(PrestadoresContext);

  const prestador = dbPrestadores.find((elem) => elem.id == idSeller);

  const handleSchedule = () => {

    console.log(value)

  }


  return (
    <ProviderContainer>
        <HeaderPrestador>
            <img src={prestador.imagem} alt={prestador.name}/>
            <div>
                <p className="prestadorName">{prestador.name}</p>
                <p className="prestadorCategory">{prestador.category}</p>
            </div>
        </HeaderPrestador>
        <CalendarPrestador>
            <h3>Selecione a melhor data para o serviço</h3>
            <Calendar onChange={onChange} value={value}/>
            <button onClick={handleSchedule} className="btnNextTime">Escolher horário</button>
        </CalendarPrestador>

{/* <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Basic example"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider> */}



        <div>
            Avaliações
        </div>
        <div>
            Agenda
        </div>
    </ProviderContainer>
  );
}

export default ProviderPage;
