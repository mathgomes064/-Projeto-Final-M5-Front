import image from "../../assets/image.png";
import logo from "../../assets/logo.png";
import { Container } from "./style";

const Login = () => {
  return (
    <>
      <Container>
        <div className="board">
          <div className="tittleImage">
            <h1>Encontre ou oferte serviços de maneira rápida e eficiente</h1>
            <img src={image} alt="" />
          </div>

          <div className="logoForm">
            <div>
              <img src={logo} alt="" />

              <h1>Encontre ou oferte serviços de maneira rápida e eficiente</h1>

              <form action="">
                <label htmlFor="">Email</label>
                <input type="text" placeholder="seu@email.com" />
                <label htmlFor="">Senha</label>
                <input type="password" placeholder="Sue senha" />
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
