import { DivCardSchedule } from "./styles"
import {ImBin, ImPencil} from "react-icons/im"
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material"
import { useState } from "react";

function CardSchedule (props) {

    const {service, provider, date, hour, id} = props.schedule

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    return (
        <DivCardSchedule>
            <p>{service}</p>
            <p>{provider}</p>
            <p>Data: {date}</p>
            <p>Hora: {hour}</p>
            <p>Ver detalhes</p>
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
                    <Button onClick={handleClose} autoFocus>
                        Quero cancelar
                    </Button>
                    </DialogActions>
                </Dialog>
            </div>
        </DivCardSchedule>
    )
}

export default CardSchedule