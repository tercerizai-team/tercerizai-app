import {
  Btn,
  Card,
  Container,
  Container1,
  ContainerImages,
  ImgContainer,
  Text,
  TextContainer,
  Title,
  Upper,
} from "./styles";
import eletricista from "../../assets/Eletricista.png";
import banheiro from "../../assets/banheiro.png";
import encanador from "../../assets/encanador.png";
import encana from "../../assets/encana.png";
import mecanico from "../../assets/mecanico.png";
import ajuda from "../../assets/ajuda.png";

import { useNavigate } from "react-router-dom";

function LandingPage() {
  let navigate = useNavigate();

  return (
    <>
      <Container>
        <TextContainer>
          <Upper>TercerizAi</Upper>
          <Text>
            Somos uma plataforma de intermediação entre prestadores e
            consumidores, visando facilitar a relação entre ambos. Nascemos da
            dificuldade de milhares de consumidores para encontrar profissionais
            qualificados. Nossa proposta é acelerar e automatizar todos os
            processos durante essa jornada.
          </Text>
          <Btn onClick={() => navigate("/signIn")}>Login</Btn>
          <Btn onClick={() => navigate("/signUpLanding")}>Cadastre-se</Btn>
        </TextContainer>
        <ImgContainer>
          <img src={ajuda} alt="eletricista" />
        </ImgContainer>
      </Container>
      <Container1>
        <Title>O Profissional certo para seu problema</Title>
        <Text>
          Aqui na TercerizAi você pode encontrar todos os tipos de
          profissionais.
        </Text>
        <ContainerImages>
          <Card>
            <img src={eletricista} alt="eletricista" />
          </Card>
          <Card>
            <img src={banheiro} alt="eletricista" />
          </Card>
          <Card>
            <img src={encana} alt="eletricista" />
          </Card>
          <Card>
            <img src={mecanico} alt="eletricista" />
          </Card>
          <Card>
            <img src={encanador} alt="eletricista" />
          </Card>
        </ContainerImages>
      </Container1>
    </>
  );
}

export default LandingPage;
