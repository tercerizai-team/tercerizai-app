import { Button, Container, ContainerGeral } from "./styles";
import banheiro from "../../Assets/banheiro.png";
import pessoa from "../../Assets/pessoa.png";
import { Title } from "../landingPage/styles";

function SignUpLanding() {
  return (
    <>
      <ContainerGeral>
        <Title>O que você procura?</Title>
        <Container>
          <Button>
            <img src={pessoa} alt="cliente" />
            Estou a procura de profissionais
          </Button>

          <Button>
            <img src={banheiro} alt="provedor" />
            Estou a procura de clientes
          </Button>
        </Container>
      </ContainerGeral>
    </>
  );
}

export default SignUpLanding;
