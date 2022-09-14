import { ActionMenuContainer, LinkActionMenu } from "./styles"
import { useNavigate } from "react-router-dom"

function ActionMenuPrest () {

    const navigate = useNavigate()


    return (
        <ActionMenuContainer>
            <LinkActionMenu onClick={() => navigate('/dashboard')}>Dashboard</LinkActionMenu>
            <LinkActionMenu onClick={() => navigate('/users/enderecos')}>Endereços</LinkActionMenu>
            <LinkActionMenu onClick={() => navigate('/users/carteira')}>Carteira</LinkActionMenu>
            <LinkActionMenu onClick={() => navigate('/users/favoritos')}>Favoritos</LinkActionMenu>
            <LinkActionMenu onClick={() => navigate('/users/avaliacoes')}>Avaliações</LinkActionMenu>
        </ActionMenuContainer>
    )
}

export default ActionMenuPrest