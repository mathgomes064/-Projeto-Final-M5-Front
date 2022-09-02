import { yupResolver } from "@hookform/resolvers/yup";
import { Container } from "./style";
import { useForm } from "react-hook-form";
import image from "../../assets/image.png";
import logo from "../../assets/logo.png";
import { useContext, useState } from "react";
import { UserContext } from "../../context/User";
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";

import * as yup from "yup";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const { login } = useContext(UserContext);

  const formSchema = yup.object().shape({
    email: yup.string().required("Email obrigatório"),
    password: yup.string().required("Senha obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  console.log(errors);

  return (
    <>
      <Container>
        <div className="board">
          <div className="tittleImage">
            <h1>Encontre ou oferte serviços de maneira rápida e eficiente</h1>
            <img src={image} alt="image" />
          </div>

          <div className="logoForm">
            <div>
              <img src={logo} alt="logo" />

              <h1>Encontre ou oferte serviços de maneira rápida e eficiente</h1>

              <form onSubmit={handleSubmit(login)}>
                <label htmlFor="">Email</label>
                <input
                  className="divPassword"
                  type="text"
                  placeholder="seu@email.com"
                  {...register("email")}
                />
                <span>{errors.email?.message}</span>

                <label htmlFor="">Senha</label>
                <div className="divPassword">
                  <input
                    className="inputPassword"
                    type={showPassword ? "text" : "password"}
                    placeholder="Sua senha"
                    {...register("password")}
                  />
                  {showPassword ? (
                    <AiFillEye
                      onClick={() => setShowPassword(!showPassword)}
                      className="eye"
                    />
                  ) : (
                    <AiFillEyeInvisible
                      onClick={() => setShowPassword(!showPassword)}
                      className="eye"
                    />
                  )}
                </div>
                <span>{errors.password?.message}</span>

                <button type="submit">Login</button>
              </form>

              <p>
                Ainda não possui cadastro? <button>Clique aqui</button>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Login;
