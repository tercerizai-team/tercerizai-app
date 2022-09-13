import styled from "styled-components";

export const CardProviderStyle = styled.div`
    border: 1px solid #858585;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    padding: 10px;

    img {
        width: 130px;
        align-self: center;
    }

    .providerName{
        font-size: 16px;
        font-weight: 500;
    }

    .providerCategory{
        font-size: 14px;
    }

    .providerPrice{
        font-size: 16px;
    }

    .providerRating{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 3px;

        p {
            font-size: 13px;
        }
    }
`

export const ButtonHire = styled.button`
    font-size: 15px;
    align-self: center;
    padding: 6px 25px;
    background-color: #f8e71c;
    cursor: pointer;
    box-shadow: 2px 2px 0px 0px #000;
    :hover{
        transform: scale(1.02);
    }
`