import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Modal } from "@mui/material"
import { Box } from "@mui/system";
import { useState } from "react";
import {ImBin, ImPencil} from "react-icons/im"
import EditAddressUser from "../editAddress";
import { DivCardAddress } from "./styles"
import { useContext } from "react";
import { AddressesContext } from "../../providers/userAddresses.provider";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 480,
    bgcolor: 'white',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

function CardAddress (props) {

    const {deleteAddress, refreshAddress} = useContext(AddressesContext)

    const {id, state, street, district, number, complement, city, zipCode, name} = props.address.address

    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {setOpen(true)};
    const handleClose = () => {setOpen(false)};

    const [openEditModal, setOpenEditModal] = useState(false);
    const handleOpenEditModal = () => setOpenEditModal(true);
    const handleCloseEditModal = () => setOpenEditModal(false);

    const handleDelete = (id) => {
        deleteAddress(id)
        handleClose()
        refreshAddress()
    }

    return(
        <>
        <DivCardAddress>
            <p>{name}</p>
            <p>{street}</p>
            <p>{district}</p>
            <p>{city}</p>
            <p>{state}</p>
            <p>CEP {zipCode}</p>
            <button onClick={handleOpenEditModal}><ImPencil/> Editar</button>
            <button onClick={handleClickOpen}><ImBin/> Apagar</button>
            <div>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                    {"Você tem certeza que quer apagar?"}
                    </DialogTitle>
                    <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Ao confirmar o endereço será deletado e não poderá ser recuperado.
                    </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={handleClose}>Voltar</Button>
                    <Button onClick={() => handleDelete(id)} autoFocus>
                        Apagar endereço
                    </Button>
                    </DialogActions>
                </Dialog>
            </div>
            <div>
            <Modal
                open={openEditModal}
                onClose={handleCloseEditModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <EditAddressUser address={props.address.address}/>
                </Box>
            </Modal>
            </div>

            
            
            
        </DivCardAddress>

        

        </>
    )
}

export default CardAddress