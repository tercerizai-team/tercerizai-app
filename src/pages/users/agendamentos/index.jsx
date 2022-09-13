import Header from "../../../components/header";
import ActionMenu from "../../../components/actionMenu";
import { DivCardSchedule, DivFuturesSchedules, DivPastSchedules, SchedulesContainer } from "./styles";

function Agendamentos () {

    return (
        <>
            <Header />
            <ActionMenu />
            <SchedulesContainer>
                <h2>Meus agendamentos</h2>
                <h3>Agendamentos futuros</h3>
                <DivFuturesSchedules>
                    <DivCardSchedule>
                        <p>Encanador</p>
                        <p>Fulado da Silva</p>
                        <p>Data: 15/10/2022</p>
                        <p>Hora: 15:30</p>
                        <p>Ver detalhes</p>
                        <button>Alterar agendamento</button>
                        <button>Cancelar agendamento</button>
                    </DivCardSchedule>
                    <DivCardSchedule>
                        <p>Encanador</p>
                        <p>Fulado da Silva</p>
                        <p>Data: 15/10/2022</p>
                        <p>Hora: 15:30</p>
                        <p>Ver detalhes</p>
                        <button>Alterar agendamento</button>
                        <button>Cancelar agendamento</button>
                    </DivCardSchedule>
                    <DivCardSchedule>
                        <p>Encanador</p>
                        <p>Fulado da Silva</p>
                        <p>Data: 15/10/2022</p>
                        <p>Hora: 15:30</p>
                        <p>Ver detalhes</p>
                        <button>Alterar agendamento</button>
                        <button>Cancelar agendamento</button>
                    </DivCardSchedule>
                    <DivCardSchedule>
                        <p>Encanador</p>
                        <p>Fulado da Silva</p>
                        <p>Data: 15/10/2022</p>
                        <p>Hora: 15:30</p>
                        <p>Ver detalhes</p>
                        <button>Alterar agendamento</button>
                        <button>Cancelar agendamento</button>
                    </DivCardSchedule>
                    
                    
                </DivFuturesSchedules>
                <h3>Agendamentos finalizados</h3>
                <DivPastSchedules>
                <DivCardSchedule>
                        <p>Encanador</p>
                        <p>Fulado da Silva</p>
                        <p>Data: 15/10/2022</p>
                        <p>Hora: 15:30</p>
                        <p>Ver detalhes</p>
                        <button>Avaliar</button>
                    </DivCardSchedule>
                </DivPastSchedules>
            </SchedulesContainer>
        </>
    )
}

export default Agendamentos