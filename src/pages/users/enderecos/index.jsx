import ActionMenu from "../../../components/actionMenu";
import Header from "../../../components/header";
import { AddressesContainer, DivAddresses, DivCardAddress } from "./styles";



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
                        <button>Editar</button>
                        <span>Apagar</span>
                    </DivCardAddress>
                    <DivCardAddress>
                        <p>Trabalho</p>
                        <p>Rua dos Dores</p>
                        <p>Perdizes</p>
                        <p>São Paulo</p>
                        <p>SP</p>
                        <p>CEP 05002061</p>
                        <button>Editar</button>
                        <span>Apagar</span>
                    </DivCardAddress>
                    <DivCardAddress>
                        <p>Casa da Sogra</p>
                        <p>Rua dos Dores</p>
                        <p>Perdizes</p>
                        <p>São Paulo</p>
                        <p>SP</p>
                        <p>CEP 05002061</p>
                        <button>Editar</button>
                        <span>Apagar</span>
                    </DivCardAddress>
                </DivAddresses>
                <div>
                    <button>Cadastrar novo endereço</button>
                </div>
            </AddressesContainer>
        </>
    )
}

export default Enderecos