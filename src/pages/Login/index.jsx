import { Container } from "./style";
import image from "../../assets/image.png";
import logo from "../../assets/logo.png";

import { Link } from "react-router-dom";
import Form from "../../components/Form";

const Login = () => {
  return (
    <Container>
      <div className="align">
        <div className="tittleImage">
          <h1>Encontre ou oferte serviços de maneira rápida e eficiente</h1>
          <img src={image} alt="image" className="image" />
        </div>
        <div className="board">
          <div className="logoForm">
            <img src={logo} alt="logo" />

            <h1>Encontre ou oferte serviços de maneira rápida e eficiente</h1>

            <Form type="login" />

            <p>
              Ainda não possui cadastro? <Link to="/register">Clique aqui</Link>
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Login;
