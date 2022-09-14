import styled from "styled-components";

export const ActionMenuContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 30px;
    margin: 15px 150px;
    padding: 10px 10px;
    border: 2px solid black;
    box-shadow: 4px 4px 0px 0px rgba(248,231,28,1);
`

export const LinkActionMenu = styled.button`
    border: none;
    background-color: white;
    font-size: 15px;
        :hover {
            cursor: pointer;
            transform: scale(1.05);
            /* color: green; */
        }
`