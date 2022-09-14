import { Content } from "../signIn/styles";
import eletricista from "../../assets/Eletricista.png";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Btn } from "../landingPage/styles";
import { ContainerImageSignUp } from "../signUpUser/styles";
import { ContainerSignUpProvider } from "./styles";

function SignUpProvider() {
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
    address: yup.object().shape({
      state: yup.string().required("Campo obrigatório"),
      street: yup.string().required("Campo obrigatório"),
      district: yup.string().required("Campo obrigatório"),
      number: yup.string().required("Campo obrigatório"),
      complement: yup.string(),
      city: yup.string().required("Campo obrigatório"),
      zipCode: yup.string().required("Campo obrigatório"),
    }),
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
        <img src={eletricista} alt="eletricista" />
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

          {errors.address?.state ? (
            <h3>{errors.address?.state?.message}</h3>
          ) : (
            <p>Estado</p>
          )}
          <select
            {...register("address.state")}
            className={errors.address?.state ? "erro" : ""}
          >
            <option value={""} selected>
              Estado
            </option>
            <option value={"AC"}>Acre</option>
            <option value={"AL"}>Alagoas</option>
            <option value={"AP"}>Amapá</option>
            <option value={"AM"}>Amazonas</option>
            <option value={"BA"}>Bahia</option>
            <option value={"CE"}>Ceara</option>
            <option value={"DF"}>Distrito Federal</option>
            <option value={"ES"}>Espirito Santo</option>
            <option value={"GO"}>Goiás</option>
            <option value={"MA"}>Maranhão</option>
            <option value={"MT"}>Mato Grosso</option>
            <option value={"MS"}>Mato Grosso do Sul</option>
            <option value={"MG"}>Minas Gerais</option>
            <option value={"PA"}>Para</option>
            <option value={"PB"}>Paraíba</option>
            <option value={"PE"}>Pernambuco</option>
            <option value={"PI"}>Piauí</option>
            <option value={"RJ"}>Rio de Janeiro</option>
            <option value={"RN"}>Rio Grande do Norte</option>
            <option value={"RS"}>Rio Grande do Sul</option>
            <option value={"RO"}>Rondônia</option>
            <option value={"SP"}>São Paulo</option>
            <option value={"SE"}>Sergipe</option>
            <option value={"TO"}>Tocantins</option>
          </select>

          {errors.address?.city ? (
            <h3>{errors.address?.city?.message}</h3>
          ) : (
            <p>Cidade</p>
          )}
          <input
            placeholder="Cidade"
            {...register("address.city")}
            className={errors.address?.city ? "erro" : ""}
          ></input>

          {errors.address?.street ? (
            <h3>{errors.address?.street?.message}</h3>
          ) : (
            <p>Rua</p>
          )}
          <input
            placeholder="Rua"
            {...register("address.street")}
            className={errors.address?.street ? "erro" : ""}
          ></input>

          {errors.address?.district ? (
            <h3>{errors.address?.district?.message}</h3>
          ) : (
            <p>Bairro</p>
          )}
          <input
            placeholder="Bairro"
            {...register("address.district")}
            className={errors.address?.district ? "erro" : ""}
          ></input>

          {errors.address?.number ? (
            <h3>{errors.address?.number?.message}</h3>
          ) : (
            <p>Número</p>
          )}
          <input
            placeholder="Número"
            {...register("address.number")}
            className={errors.address?.number ? "erro" : ""}
          ></input>

          {errors.address?.zipCode ? (
            <h3>{errors.address?.zipCode?.message}</h3>
          ) : (
            <p>Cep</p>
          )}
          <input
            placeholder="Cep"
            {...register("address.zipCode")}
            className={errors.address?.zipCode ? "erro" : ""}
          ></input>

          {errors.address?.complement ? (
            <h3>{errors.address?.complement?.message}</h3>
          ) : (
            <p>Complemento</p>
          )}
          <input
            placeholder="Complemento"
            {...register("address.complement")}
            className={errors.address?.complement ? "erro" : ""}
          ></input>

          <Btn>Cadastrar</Btn>
        </form>
      </ContainerSignUpProvider>
    </Content>
  );
}
export default SignUpProvider;
