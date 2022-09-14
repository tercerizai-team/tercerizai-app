import { Button, Container, ContainerGeral } from "./styles";
import banheiro from "../../assets/banheiro.png";
import pessoa from "../../assets/pessoa.png";
import { Title } from "../landingPage/styles";
import { useNavigate } from "react-router-dom";

function SignUpLanding() {
  let navigate = useNavigate();

  return (
    <>
      <ContainerGeral>
        <Title>O que você procura?</Title>
        <Container>
          <Button onClick={() => navigate("/signUpUser")}>
            <img src={pessoa} alt="cliente" />
            Estou a procura de profissionais
          </Button>

          <Button onClick={() => navigate("/signUpProvider")}>
            <img src={banheiro} alt="provedor" />
            Estou a procura de clientes
          </Button>
        </Container>
      </ContainerGeral>
    </>
  );
}

export default SignUpLanding;
