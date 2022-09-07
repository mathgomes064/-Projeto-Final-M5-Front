import { FaInstagram } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { AiOutlineLinkedin } from "react-icons/ai";

import logo from "../../assets/logo.png";
import { FooterStyle } from "./style";

export const Footer = () => {
  return (
    <FooterStyle>
      <footer>
        <div className="blueLine"></div>
        <div>
          <div>
            <a href="https://github.com/1-grupo-vilson-projeto-front-end/projeto-front-end">
              <FaInstagram className="links" />
            </a>
            <a href="https://github.com/1-grupo-vilson-projeto-front-end/projeto-front-end">
              <BsFacebook className="links" />
            </a>
            <a href="https://github.com/1-grupo-vilson-projeto-front-end/projeto-front-end">
              <BsGithub className="links" />
            </a>
            <a href="https://github.com/1-grupo-vilson-projeto-front-end/projeto-front-end">
              <AiOutlineLinkedin className="links" />
            </a>
          </div>
          <div className="logo">
            <img src={logo}></img>
          </div>
        </div>
        <p className="credits">
          ©Projeto Front-End desenvolvido por: Daniel Matos | Esther Suriel
          Matheus Gomes | Sidarta Kauã |Tainá Tenório
        </p>
      </footer>
    </FooterStyle>
  );
};
