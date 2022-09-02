import logo from "../../assets/img/logoNiceJobs.png";
import { Container } from "./style";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
const Register = () => {
  const formSchema = yup.object().shape({
    name: yup
      .string()
      .required("Nome de usuário obrigatório")
      .matches(
        /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/,
        "O nome pode conter apenas letras"
      ),
    email: yup.string().required("Email obrigatório").email("E-mail inválido"),
    password: yup
      .string()
      .required("Senha obrigatória!")
      .min(8, "A senha deve conter no mínimo 8 caracteres")
      .matches(
        /^(?=.*?[A-Za-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
        "A senha deve conter no mínimo um símbolo, um número e letras maiúsculas e minúsculas"
      ),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "As senhas não estão iguais")
      .required("Confirme sua senha"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm <
  IUser >
  {
    resolver: yupResolver(formSchema),
  };
  return (
    <Container>
      <img src={logo} alt="Logo NiceJobs" />
      <form onSubmit={handleSubmit(registerUser)}>
        <input placeholder="Nome" />
        <input placeholder="Email" />
        <input placeholder="Senha" />
        <input placeholder="Confirme a senha" />
        <input placeholder="Contato" />
        <input id="bio" placeholder="Fale sobre você" />
        <select name="type" id="select">
          <option value="Fornecer Serviço">Fornecer Serviço</option>
          <option value="Contratar Serviço">Contratar Serviço</option>
        </select>
        <button type="submit">Cadastrar </button>
      </form>
    </Container>
  );
};
export default Register;
