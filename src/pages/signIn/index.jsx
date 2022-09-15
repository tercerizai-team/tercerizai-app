import { Btn } from "../landingPage/styles";
import { Container, ContainerImage, Content } from "./styles";
import maquina from "../../assets/maquina.png";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../database/database";
import { toast, ToastContainer } from "react-toastify";

function SignIn() {
  const sucsses = () =>
    toast.success("Você será redirecionado para página inicial");

  let navigate = useNavigate();
  const schema = yup.object().shape({
    email: yup.string().email("E-mail inválido").required("Campo obrigatório"),
    password: yup.string().required("Campo obrigatório"),
    //   .matches(
    //     /^(?=.*\d)(?=.*[aA-zZ\s])(?=.*[$*&@#])[0-9a-zA-Z$*&@#-]{8,}$/,
    //     "Sua senha deve conter pelo menos 8 caracteres sendo eles, pelo menos um caractere especial, um número e letras"
    //   ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    axios
      .post(`${baseUrl}/login`, data)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        if (res.data.isProvider) {
          navigate("/dashboard");
        } else {
          navigate("/home");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <Content>
      <ToastContainer />
      <ContainerImage tamanho="280px">
        <img src={maquina} alt="maquina" />
      </ContainerImage>
      <Container heigh="300px">
        <form onSubmit={handleSubmit(onSubmit)}>
          {errors.email ? <h3>{errors.email?.message}</h3> : <p>E-mail</p>}
          <input
            placeholder="E-mail"
            {...register("email")}
            className={errors.email ? "erro" : ""}
          />
          {errors.password ? <h3>{errors.password?.message}</h3> : <p>Senha</p>}
          <input
            placeholder="Senha"
            type={"password"}
            {...register("password")}
            className={errors.password ? "erro" : ""}
          />
          <Btn>Entrar</Btn>
          <span>
            Ainda não tem uma conta?{" "}
            <Link to={"/signUpLanding"}>Cadastre-se</Link>
          </span>
        </form>
      </Container>
    </Content>
  );
}

export default SignIn;
