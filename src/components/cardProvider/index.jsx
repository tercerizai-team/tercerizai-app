import { CardProviderStyle, ButtonHire } from "./styles"
import { VscStarHalf } from "react-icons/vsc";
import { useNavigate } from "react-router-dom"; 
import { profilePhoto } from "../../database/database";

function CardProvider (props) {

    const navigate = useNavigate()

    const {name, providerCategories, price, stars, reviews, imageUrl, id} = props.prestador

    

    const handleClick = (name) => {

        const prestador = name.toLowerCase().split(' ').join('-').normalize("NFD").replace(/[\u0300-\u036f]/g, "")

        navigate(`/users/prestadores/${id}`)
    }

    return (
        <CardProviderStyle>
            <img src={imageUrl === null ? profilePhoto : imageUrl} alt={name}/>
            <p className="providerName">{name}</p>
            <p className="providerCategory">{providerCategories[0]?.category.name}</p>
            <div className="providerRating">
                <VscStarHalf color="gold"/>
                <p>{stars}</p>
                <p> | </p>
                <p> {reviews} avaliações </p>
            </div>
            <ButtonHire onClick={() => handleClick(id)}>Contratar</ButtonHire>
        </CardProviderStyle>
    )
}

export default CardProvider