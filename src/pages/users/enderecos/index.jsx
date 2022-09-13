import ActionMenu from "../../../components/actionMenu";
import Header from "../../../components/header";
import { AddressesContainer, DivAddresses, DivCardAddress } from "./styles";
import {ImBin, ImPencil} from "react-icons/im"
import { IoMdAddCircle } from "react-icons/io"



function Enderecos () {


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
                    <button><IoMdAddCircle /> Cadastrar novo endereço</button>
                </div>
            </AddressesContainer>
        </>
    )
}

export default Enderecos