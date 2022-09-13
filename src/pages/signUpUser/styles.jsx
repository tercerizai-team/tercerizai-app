import styled, { keyframes } from "styled-components";

const Appear = keyframes`
from{
    opacity: 0;

}
to{
    opacity: 1;

}
`;

const AppearFromRigth = keyframes`
    from{
        opacity: 0;
        transform: translateX(50px);
    }
    to{
        opacity: 1;
        transform: translateX(0px);
    }
 `;

export const ContainerImageSignUp = styled.div`
  background-color: #faedde;
  width: ${(props) => props.width};
  height: ${(props) => props.heigh};
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    height: 80%;
  }
  animation: ${Appear} 2s;
`;

export const ContainerSignUp = styled.div`
  display: flex;
  flex-direction: column;
  animation: ${AppearFromRigth} 1s;
  justify-content: center;
  border: 1px solid black;
  height: ${(props) => props.heigh};
  width: ${(props) => props.width};
  padding: 0px 20px;
  box-shadow: #353535 1px 1px 1px 1px;
  input {
    margin-top: 5px;
    margin-bottom: 20px;
    height: 25px;
  }
  .erro {
    border-bottom: #b43939 3px solid;
    border-right: #b43939 1px solid;
    border-top: #b43939 1px solid;
    border-left: #b43939 1px solid;
  }
  span {
    margin-top: 20px;
  }
  a {
    color: black;
    font-weight: bold;
    text-decoration: none;
    :hover {
      text-decoration: underline;
    }
  }

  form {
    display: flex;
    flex-direction: column;
  }

  h3 {
    color: #b43939;
    font-weight: bold;
  }
`;
