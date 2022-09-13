import { ActionMenuContainer, LinkActionMenu } from "./styles"

function ActionMenu () {


    return (
        <ActionMenuContainer>
            <LinkActionMenu>Agendamentos</LinkActionMenu>
            <LinkActionMenu>Endereços</LinkActionMenu>
            <LinkActionMenu>Carteira</LinkActionMenu>
            <LinkActionMenu>Favoritos</LinkActionMenu>
            <LinkActionMenu>Avaliações</LinkActionMenu>
        </ActionMenuContainer>
    )
}

export default ActionMenu