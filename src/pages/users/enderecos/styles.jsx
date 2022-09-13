import styled from "styled-components";

export const AddressesContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    gap: 30px;
    margin: 30px 150px;
    padding: 0px 0px;
    border: 2px solid black;
    box-shadow: 4px 4px 0px 0px rgba(248,231,28,1);

    h2{
        font-size: 25px;
        align-self: center;
        margin-top: 10px;
    }
`

export const DivAddresses = styled.div`
    margin-left: 10px;
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    margin-bottom: 20px;
`

export const DivCardAddress = styled.div`
    border: 1px solid black;
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 200px;
`