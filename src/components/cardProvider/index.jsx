import { CardProviderStyle, ButtonHire } from "./styles"
import { VscStarHalf } from "react-icons/vsc";
import { useNavigate } from "react-router-dom"; 

function CardProvider (props) {

    const navigate = useNavigate()

    const {name, category, price, stars, reviews, imagem, id} = props.prestador

    const handleClick = (name) => {

        const prestador = name.toLowerCase().split(' ').join('-').normalize("NFD").replace(/[\u0300-\u036f]/g, "")

        navigate(`/users/prestadores/${id}`)
    }

    return (
        <CardProviderStyle>
            <img src={imagem} alt={category}/>
            <p className="providerName">{name}</p>
            <p className="providerCategory">{category}</p>
            <p className="providerPrice">{Math.abs(price).toLocaleString('pt-BR',{
                style: 'currency',
                currency: 'BRL'
            })}</p>
            <div className="providerRating">
                <VscStarHalf color="gold"/>
                <p>{stars}</p>
                <p> | </p>
                <p> {reviews} avaliações </p>
            </div>
            <ButtonHire onClick={() => handleClick(name)}>Contratar</ButtonHire>
        </CardProviderStyle>
    )
}

export default CardProvider