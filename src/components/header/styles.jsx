import styled from "styled-components";

export const StyledHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    padding: 0px 115px ;
    height: 70px;
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
