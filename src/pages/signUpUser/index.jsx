import { Btn } from "../landingPage/styles";
import { Content } from "../signIn/styles";
import pessoa from "../../Assets/pessoa.png";
import { ContainerImageSignUp, ContainerSignUp } from "./styles";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

function SignUpUser() {
  const schema = yup.object().shape({
    imageUrl: yup.string().url("Deve ser um link URL"),
    name: yup
      .string()
      .required("Campo obrigatório")
      .matches(/^[aA-zZ\s]+$/, "Esse campo só pode receber letras"),
    email: yup.string().email("E-mail inválido").required("Campo obrigatório"),
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
  };

  return (
    <Content>
      <ContainerImageSignUp heigh="430px" width="280px">
        <img src={pessoa} alt="pessoa" />
      </ContainerImageSignUp>
      <ContainerSignUp heigh="450px" width="280px">
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
        </form>
      </ContainerSignUp>
    </Content>
  );
}
export default SignUpUser;
