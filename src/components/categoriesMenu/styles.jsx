import styled from "styled-components";

export const CategoriesMenuContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 30px;
    margin: 30px 150px;
    padding: 15px 10px;
    border: 2px solid black;
    box-shadow: 4px 4px 0px 0px rgba(248,231,28,1);
`

export const CardCategory = styled.div`
    background-color: #f8e71c;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
    cursor: pointer;
    padding: 3px 15px;
    box-shadow: 4px 4px 0px 0px #01afd1;
    :hover{
        transform: scale(1.1);
    }

    p {
        font-size: 13px;
        font-weight: 400;
    }
`