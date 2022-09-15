import Header from "../../../components/header";
import ActionMenu from "../../../components/actionMenu";
import { DivCardSchedule, DivFuturesSchedules, DivPastSchedules, SchedulesContainer } from "./styles";
import {HiStar} from "react-icons/hi"
import { useContext } from "react";
import { SchedulesContext } from "../../../providers/schedules";
import CardSchedule from "../../../components/cardSchedules";
import { useEffect } from "react";

function Agendamentos () {

    const {dbSchedules, listSchedules} = useContext(SchedulesContext)
    useEffect(() => {
        listSchedules()
      }, []);

    return (
        <>
            <Header />
            <ActionMenu />
            <SchedulesContainer>
                <h2>Meus agendamentos</h2>
                <h3>Agendamentos futuros</h3>
                <DivFuturesSchedules>
                    
                    {dbSchedules.map((elem) => (
                        <CardSchedule key={elem.id} schedule={elem}/>
                    ))}
                    
                </DivFuturesSchedules>
                <h3>Agendamentos finalizados</h3>
                <DivPastSchedules>
                <DivCardSchedule>
                        <p>Encanador</p>
                        <p>Fulado da Silva</p>
                        <p>Data: 15/10/2022</p>
                        <p>Hora: 15:30</p>
                        <p>Ver detalhes</p>
                        <button><HiStar />Avaliar</button>
                    </DivCardSchedule>
                </DivPastSchedules>
            </SchedulesContainer>
        </>
    )
}

export default Agendamentos