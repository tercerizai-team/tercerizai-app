import ActionMenu from "../../../components/actionMenu";
import Header from "../../../components/header";
import { CarteiraContainer, DivCardCarteira, DivCarteira } from "./styles";


function Carteira () {


    return (
        <>
            <Header />
            <ActionMenu />
            <CarteiraContainer>
                <h2>Minha carteira</h2>
                <DivCarteira>
                    <DivCardCarteira>
                        <p>Mastercard</p>
                        <p>Final 0556</p>
                        <button>Editar</button>
                        <span>Apagar</span>
                    </DivCardCarteira>
                    <DivCardCarteira>
                        <p>Visa</p>
                        <p>Final 3225</p>
                        <button>Editar</button>
                        <span>Apagar</span>
                    </DivCardCarteira>
                    <DivCardCarteira>
                        <p>Amex</p>
                        <p>Final 9114</p>
                        <button>Editar</button>
                        <span>Apagar</span>
                    </DivCardCarteira>
                </DivCarteira>
                <div>
                    <button>Cadastrar novo cartão</button>
                </div>
            </CarteiraContainer>
        </>
    )
}

export default Carteira