import styled from "styled-components";

export const SchedulesContainer = styled.div`
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

    h3{
        font-size: 17px;
        font-weight: 500;
        margin-left: 10px;
    }
`

export const DivFuturesSchedules = styled.div`
    margin-left: 10px;
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
`

export const DivCardSchedule = styled.div`
    border: 1px solid black;
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const DivPastSchedules = styled.div`
    margin-left: 10px;
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    margin-bottom: 20px;
`