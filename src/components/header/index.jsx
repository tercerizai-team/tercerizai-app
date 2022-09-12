import { StyledHeader, StyledInput } from "./styles"

function Header () {

    return (
        <>
        <StyledHeader>
            <div>Logo</div>
            <StyledInput placeholder="Pesquise"/>
            <div>User</div>
        </StyledHeader>     
        </>
    )
}

export default Header