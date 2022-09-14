import { CardsContainer } from "./styles"
import CardProvider from "../cardProvider";
import { useContext } from "react";
import { PrestadoresContext } from "../../providers/prestadoresProvider";



function CardContainer () {

    const {dbPrestadores} = useContext(PrestadoresContext)

    return (
        <CardsContainer>
            {dbPrestadores.map((elem) =>(
                <CardProvider key={elem.id} prestador={elem}/>
            ))}
        </CardsContainer>
    )
}

export default CardContainer