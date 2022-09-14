import styled from "styled-components";

export const StyledHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    padding: 0px 150px ;
    height: 80px;
    background-color: #01afd1;

    img{
        cursor: pointer;
    }
`

export const StyledInput = styled.input`
    font-size: 15px;
    padding: 15px;
    margin: 10px;
    background: #f5f5f5;
    border: none;
    border-radius: 3px;
    width: 40%;
    ::placeholder {
        color: #c5c5c5;
    }
`
export const AccountButton = styled.button`
    border: none;
    background-color: #01afd1;
    cursor: pointer;
`

export const HeaderUsersSearch = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

export const SearchBar = styled.input`
    font-size: 15px;
    padding: 8px 3px;
    border: 2px solid #131313;
    color: #131313;
    box-shadow: 3px 3px 0px 0px rgba(248,231,28,1);
`