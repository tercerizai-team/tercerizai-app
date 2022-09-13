import styled from "styled-components";

export const Container = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #faedde;
  justify-content: space-around;
`;

export const TextContainer = styled.div`
  height: 270px;
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  line-height: 21px;
  align-items: flex-start;
`;

export const Upper = styled.h1`
  color: black;
  font-size: 40px;
  font-weight: bold;
  -webkit-text-fill-color: #f8e71c;
  -webkit-text-stroke-width: 1px;
  transition: ease-in-out 0.5s;
  :hover {
    letter-spacing: 1px;
  }
`;

export const Text = styled.p`
  color: #444;
`;

export const Btn = styled.button`
  background-color: #f8e71c;
  border: #444 1px solid;
  height: 25px;
  color: #353535;
  font-weight: bold;
  box-shadow: #353535 1px 1px 1px 1px;
  transition: ease-in-out 0.5s;
  :hover {
    transform: scale(110%);
    cursor: pointer;
  }
`;

export const ImgContainer = styled.div`
  img {
    width: 200px;
  }
`;

export const Container1 = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #fffaf4;
  align-items: center;
`;

export const Title = styled.h1`
  margin-top: 30px;
  color: black;
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 50px;
  /* border-bottom: 5px solid #f8e71c; */
  text-decoration: underline 5px #f8e71c;
`;

export const ContainerImages = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 70%;
  width: 80%;
  margin-top: 40px;
  justify-content: center;
  align-items: center;
  justify-content: space-around;
  overflow-y: auto;
  align-items: flex-start;
`;

export const Card = styled.div`
  width: 180px;
  height: 200px;
  border: 1px solid black;
  align-items: center;
  justify-content: center;
  display: flex;
  transition: 0.3s ease-in-out;
  img {
    height: 150px;
  }
  margin-top: 10px;
  :hover {
    transform: scale(110%);
  }
`;
