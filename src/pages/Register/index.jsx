import logo from "../../assets/img/logoNiceJobs.png";
import { Container } from "./style";
import Input from "../../components/Input";
import InputPassword from "../../components/InputPassword";
import Button from "../../components/Button";
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
      .required("Senha obrigatória")
      .min(8, "A senha deve conter no mínimo 8 caracteres")
      .matches(
        /^(?=.*?[A-Za-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
        "A senha deve conter no mínimo um símbolo, um número e letras maiúsculas e minúsculas"
      ),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "As senhas não estão iguais")
      .required("Confirme sua senha"),
    contact: yup
      .string()
      .required("Número para contato obrigatório")
      .min(11, "Digite seu número para contato corretamente")
      .matches(/(?=.*?[0-9])/, "Digite seu contato em números apenas"),
    bio: yup
      .string()
      .required("Escreva uma biografia")
      .min(20, "Sua bio deve conter no mínimo 20 caracteres")
      .matches(/^(?=.*?[A-Za-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  return (
    <>
      <Container>
        <div className="registerForm">
          <div className="imgDiv">
            <img src={logo} alt="Logo NiceJobs" />
          </div>
          <form onSubmit={handleSubmit()}>
            <div className="form">
              <div className="column">
                <Input
                  placeholder="Nome"
                  type="text"
                  id="name"
                  {...register("name")}
                  label="Nome"
                />
                <p> {errors.name?.message}</p>
                <Input
                  placeholder="Email"
                  type="email"
                  id="email"
                  {...register("email")}
                  label="Email"
                />
                <p>{errors.email?.message}</p>
                <InputPassword
                  placeholder="Senha"
                  id="password"
                  type="password"
                  {...register("password")}
                  label="Senha"
                />
                <p>{errors.password?.message} </p>
                <InputPassword
                  placeholder="Confirmar senha"
                  type="password"
                  id="confirmPassword"
                  {...register("confirmPassword")}
                  label="Confirme sua senha"
                />
                <p> {errors.confirmPassword?.message}</p>
              </div>
              <div className="column">
                <Input
                  placeholder="(00) 0 0000 - 0000"
                  id="contact"
                  label="Contato"
                  type="number"
                  {...register("contact")}
                />
                <p> {errors.contact?.message}</p>
                <Input
                  placeholder="Fale sobre você"
                  id="bio"
                  type="text"
                  {...register("bio")}
                  label="Bio"
                />
                <p> {errors.bio?.message}</p>
                <div className="selectDiv">
                  <label htmlFor="select">Pretendo</label>
                  <select title="type" id="select" {...register("type")}>
                    <option value="Fornecer Serviço">Fornecer Serviço</option>
                    <option value="Contratar Serviço">Contratar Serviço</option>
                  </select>
                </div>
              </div>
            </div>
            <Button type="submit" text="Cadastre-se" />
          </form>
          <div className="redirectDiv">
            <p>
              Já possui cadastro? Clique <a href="">aqui</a>
            </p>
          </div>
        </div>
      </Container>
    </>
  );
};
export default Register;
