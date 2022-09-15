import { DivCardSchedule } from "./styles"
import {ImBin, ImPencil} from "react-icons/im"
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material"
import { useState, useContext } from "react";
import { SchedulesContext } from "../../providers/schedules";


function CardSchedule (props) {

    const {deleteSchedule} = useContext(SchedulesContext)

    const {serviceDescription, provider, serviceDate, hour, id} = props.schedule

    console.log(id)

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    return (
        <DivCardSchedule>
            <p>{serviceDescription}</p>
            <p>{provider}</p>
            <p>Data: {serviceDate}</p>
            <p>Hora: {hour}</p>
            <button><ImPencil /> Alterar agendamento</button>
            <button onClick={handleClickOpen}><ImBin /> Cancelar agendamento</button>
            <div>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                    {"Você tem certeza que quer cancelar?"}
                    </DialogTitle>
                    <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Ao confirmar o cancelamento o prestador poderá agendar outro cliente nesse dia e horário.
                    </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={handleClose}>Voltar</Button>
                    <Button onClick={() => deleteSchedule(id)} autoFocus>
                        Quero cancelar
                    </Button>
                    </DialogActions>
                </Dialog>
            </div>
        </DivCardSchedule>
    )
}

export default CardSchedule