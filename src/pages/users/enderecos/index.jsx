import ActionMenu from "../../../components/actionMenu";
import Header from "../../../components/header";
import { AddressesContainer, DivAddresses, DivCardAddress } from "./styles";
import { IoMdAddCircle } from "react-icons/io"

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import { useState } from "react";
import NewAddress from "../../../components/newAddress";

import { useContext } from "react";
import { AddressesContext } from "../../../providers/userAddresses.provider";
import CardAddress from "../../../components/cardAddresses";
import EditAddress from "../../../components/editAddress";
import EditAddressUser from "../../../components/editAddress";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 480,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

function Enderecos () {

    const {dbAddresses} = useContext(AddressesContext)

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    console.log(dbAddresses)

    return (

        <>
            <Header />
            <ActionMenu />
            <AddressesContainer>
                <h2>Meus endereços</h2>
                <DivAddresses>
                    {dbAddresses.map((elem) =>(
                        <CardAddress key={elem.id} address={elem}/>
                    ))}
                </DivAddresses>
                <div>
                    <button onClick={handleOpen}><IoMdAddCircle /> Cadastrar novo endereço</button>
                </div>
            </AddressesContainer>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                <NewAddress />
                </Box>
            </Modal>
        </>
    )
}

export default Enderecos