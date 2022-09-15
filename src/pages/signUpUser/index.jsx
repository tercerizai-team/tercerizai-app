import { Btn } from "../landingPage/styles";
import { Content } from "../signIn/styles";
import pessoa from "../../assets/pessoa.png";
import { ContainerImageSignUp, ContainerSignUp } from "./styles";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { baseUrl } from "../../database/database";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { ContainerSignUpProvider } from "../signUpProvider/styles";

function SignUpUser() {
  let navigate = useNavigate();

  const sucsses = () =>
    toast.success("Você será redirecionado para página inicial");

  const schema = yup.object().shape({
    imageUrl: yup.string().url("Deve ser um link URL"),
    name: yup
      .string()
      .required("Campo obrigatório")
      .matches(/^[aA-zZ\s]+$/, "Esse campo só pode receber letras"),
    email: yup.string().email("E-mail inválido").required("Campo obrigatório"),
    phone: yup
      .string()
      .required("Campo obrigatório")
      .matches(
        /^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}-?[0-9]{4}$/,
        "Número inválido"
      ),
    password: yup.string().required("Campo obrigatório"),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password"), null], "As senhas devem ser iguais"),

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
    delete data.passwordConfirm;
    console.log(data);
    axios
      .post(`${baseUrl}/users`, data)
      .then((res) => {
        console.log(res);
        sucsses();
        setTimeout(navigate("/signIn"), 5000);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Content>
      <ToastContainer />
      <ContainerImageSignUp heigh="430px" width="280px">
        <img src={pessoa} alt="pessoa" />
      </ContainerImageSignUp>
      <ContainerSignUpProvider heigh="450px" width="280px">
        <form onSubmit={handleSubmit(onSubmit)}>
          {errors.imageUrl ? (
            <h3>{errors.imageUrl?.message}</h3>
          ) : (
            <p>Url da imagem</p>
          )}
          <input
            placeholder="Url da imagem"
            {...register("imageUrl")}
            className={errors.imageUrl ? "erro" : ""}
          ></input>

          {errors.name ? <h3>{errors.name?.message}</h3> : <p>Nome</p>}
          <input
            placeholder="Nome"
            {...register("name")}
            className={errors.name ? "erro" : ""}
          ></input>

          {errors.email ? <h3>{errors.email?.message}</h3> : <p>E-mail</p>}
          <input
            placeholder="Email"
            {...register("email")}
            className={errors.email ? "erro" : ""}
          ></input>

          {errors.phone ? <h3>{errors.phone?.message}</h3> : <p>Telefone</p>}
          <input
            placeholder="(DDD)000000000"
            {...register("phone")}
            className={errors.phone ? "erro" : ""}
          ></input>

          {errors.password ? <h3>{errors.password?.message}</h3> : <p>Senha</p>}
          <input
            placeholder="Senha"
            type={"password"}
            {...register("password")}
            className={errors.password ? "erro" : ""}
          ></input>

          {errors.passwordConfirm ? (
            <h3>{errors.passwordConfirm?.message}</h3>
          ) : (
            <p>Confirmar senha</p>
          )}
          <input
            placeholder="Confirme a senha"
            type={"password"}
            {...register("passwordConfirm")}
            className={errors.passwordConfirm ? "erro" : ""}
          ></input>
          <Btn>Cadastrar</Btn>
          <span>
            Já tem uma conta? Faça <Link to={"/signIn"}>login</Link>
          </span>
        </form>
      </ContainerSignUpProvider>
    </Content>
  );
}
export default SignUpUser;
