import ActionMenu from "../../../components/actionMenu";
import Header from "../../../components/header";
import { CarteiraContainer, DivCardCarteira, DivCarteira } from "./styles";
import { FaCcVisa, FaCcMastercard, FaCcAmex, FaCreditCard } from "react-icons/fa"
import {ImBin, ImPencil} from "react-icons/im"

function Carteira () {


    return (
        <>
            <Header />
            <ActionMenu />
            <CarteiraContainer>
                <h2>Minha carteira</h2>
                <DivCarteira>
                    <DivCardCarteira>
                        <p><FaCcMastercard size={80}/></p>
                        <div className="divCardCateira1">
                            <p>Final 5562</p>
                            <div className="divCardCateira2">
                                <button><ImPencil color="#2e58ff"/></button>
                                <button><ImBin color="#ff251a"/></button>
                            </div>
                        </div>
                    </DivCardCarteira>
                    <DivCardCarteira>
                        <p><FaCcVisa size={80}/></p>
                        <div className="divCardCateira1">
                            <p>Final 4187</p>
                            <div className="divCardCateira2">
                                <button><ImPencil color="#2e58ff"/></button>
                                <button><ImBin color="#ff251a"/></button>
                            </div>
                        </div>
                    </DivCardCarteira>
                    <DivCardCarteira>
                        <p><FaCcAmex size={80}/></p>
                        <div className="divCardCateira1">
                            <p>Final 9114</p>
                            <div className="divCardCateira2">
                                <button><ImPencil color="#2e58ff"/></button>
                                <button><ImBin color="#ff251a"/></button>
                            </div>
                        </div>
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