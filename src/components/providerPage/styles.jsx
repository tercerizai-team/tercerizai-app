import styled from "styled-components";

export const ProviderContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    gap: 30px;
    margin: 30px 150px;
    padding: 0px 0px;
    border: 2px solid black;
    box-shadow: 4px 4px 0px 0px rgba(248,231,28,1);
`

export const HeaderPrestador = styled.div`
    background-color: #f8e71c;
    display: flex;
    width: 100%;
    justify-content: flex-start;
    align-items: center;
    gap: 150px;

    img{
        margin: 10px 0px 10px 30px;
        height: 200px;
    }

    .prestadorName{
        font-size: 45px;
    }

    .prestadorCategory{
        font-size: 30px;
    }
`

export const CalendarPrestador = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-left: 30px;

    .btnNextTime{
        font-size: 15px;
        padding: 6px 25px;
        width: 180px;
        background-color: #f8e71c;
        cursor: pointer;
        box-shadow: 2px 2px 0px 0px #000;
        :hover{
            transform: scale(1.02);
        }

    }
`

export const BookingDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 25px;
    margin-bottom: 25px;

    .BookingDiv1{

    }

    .BookingDiv2{
        width: 50%;
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    .btnConfirmSchedule{
        align-self: flex-end;
        font-size: 15px;
        padding: 6px 25px;
        width: 180px;
        background-color: #f8e71c;
        cursor: pointer;
        box-shadow: 2px 2px 0px 0px #000;
        :hover{
            transform: scale(1.02);
        }
    }
`