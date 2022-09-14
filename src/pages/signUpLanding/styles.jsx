import styled, { keyframes } from "styled-components";

const Float = keyframes`
	0%,100%{
		transform:translatey(0)
	}
	50%{
		transform:translatey(-20px)
	}
 `;

export const Button = styled.button`
  background-color: #fffaf4;
  border: 1px solid black;
  width: 250px;
  height: 300px;
  cursor: pointer;
  display: flex;
  align-items: center;
  flex-direction: column;
  font-weight: bold;
  justify-content: space-around;
  margin-left: 15px;
  margin-right: 15px;
  img {
    height: 200px;
  }
  :hover {
    animation: ${Float} 2s infinite ease-in-out;
  }
`;

export const ContainerGeral = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #fffaf4;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
`;
