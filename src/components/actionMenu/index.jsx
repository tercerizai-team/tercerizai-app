import { ActionMenuContainer, LinkActionMenu } from "./styles"
import { useNavigate } from "react-router-dom"

function ActionMenu () {

    const navigate = useNavigate()


    return (
        <ActionMenuContainer>
            <LinkActionMenu onClick={() => navigate('/users/agendamentos')}>Agendamentos</LinkActionMenu>
            <LinkActionMenu onClick={() => navigate('/users/enderecos')}>Endereços</LinkActionMenu>
            <LinkActionMenu onClick={() => navigate('/users/carteira')}>Carteira</LinkActionMenu>
            <LinkActionMenu onClick={() => navigate('/users/favoritos')}>Favoritos</LinkActionMenu>
            <LinkActionMenu onClick={() => navigate('/users/avaliacoes')}>Avaliações</LinkActionMenu>
        </ActionMenuContainer>
    )
}

export default ActionMenu