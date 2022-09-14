import { AccountButton, StyledHeader, HeaderUsersSearch, SearchBar } from "./styles"
import logo from '../../assets/tercerizAi-logo.png'
import { VscAccount, VscSearch } from "react-icons/vsc";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; 

function Header () {

    const navigate = useNavigate()

    const [searchBar, setSearchBar] = useState(false)

    return (
        <>
        <StyledHeader>
            <img src={logo} height={80} alt="tercerizAi" onClick={() => navigate('/home')}/>
            {/* <StyledInput placeholder="Pesquise"/> */}
            {searchBar ? 
                <HeaderUsersSearch>
                    <SearchBar placeholder="Pesquise aqui"/>
                    <AccountButton>
                        <VscAccount size={31} color={'f5f5f5'}/>
                    </AccountButton>
                </HeaderUsersSearch>
            :
                <HeaderUsersSearch>
                    <AccountButton onClick={() => setSearchBar(true)}>
                        <VscSearch size={30} color={'f5f5f5'}/>
                    </AccountButton> 
                    <AccountButton>
                        <VscAccount size={31} color={'f5f5f5'}/>
                    </AccountButton>
                </HeaderUsersSearch>
            }
            
        </StyledHeader>     
        </>
    )
}

export default Header