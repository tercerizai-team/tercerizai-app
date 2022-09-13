import ActionMenu from "../../../components/actionMenu";
import Header from "../../../components/header";
import { AddressesContainer, DivAddresses, DivCardAddress } from "./styles";
import {ImBin, ImPencil} from "react-icons/im"
import { IoMdAddCircle } from "react-icons/io"

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import { useState } from "react";
import NewAddress from "../../../components/newAddress";

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

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (

        <>
            <Header />
            <ActionMenu />
            <AddressesContainer>
                <h2>Meus endereços</h2>
                <DivAddresses>
                    <DivCardAddress>
                        <p>Casa</p>
                        <p>Rua dos Dores</p>
                        <p>Perdizes</p>
                        <p>São Paulo</p>
                        <p>SP</p>
                        <p>CEP 05002061</p>
                        <button><ImPencil/> Editar</button>
                        <button><ImBin/> Apagar</button>
                    </DivCardAddress>
                    <DivCardAddress>
                        <p>Trabalho</p>
                        <p>Rua dos Dores</p>
                        <p>Perdizes</p>
                        <p>São Paulo</p>
                        <p>SP</p>
                        <p>CEP 05002061</p>
                        <button><ImPencil/> Editar</button>
                        <button><ImBin/> Apagar</button>
                    </DivCardAddress>
                    <DivCardAddress>
                        <p>Casa da Sogra</p>
                        <p>Rua dos Dores</p>
                        <p>Perdizes</p>
                        <p>São Paulo</p>
                        <p>SP</p>
                        <p>CEP 05002061</p>
                        <button><ImPencil/> Editar</button>
                        <button><ImBin/> Apagar</button>
                    </DivCardAddress>
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