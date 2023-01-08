import { FaInstagram } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { AiOutlineLinkedin } from "react-icons/ai";

import logo from "../../assets/newlogo.png";
import { FooterStyle } from "./style";

export const Footer = () => {
  return (
    <FooterStyle>
      <footer className="innerFooter">
        <div className="innerDiv">
          <div className="developersInfo">
            <div className="liksAndNames">
              <div>
                <a
                  href="https://github.com/1-grupo-vilson-projeto-front-end/projeto-front-end"
                  target="_blank"
                >
                  <FaInstagram className="links" />
                </a>
                <a
                  href="https://github.com/1-grupo-vilson-projeto-front-end/projeto-front-end"
                  target="_blank"
                >
                  <BsFacebook className="links" />
                </a>
                <a
                  href="https://github.com/1-grupo-vilson-projeto-front-end/projeto-front-end"
                  target="_blank"
                >
                  <BsGithub className="links" />
                </a>
                <a
                  href="https://github.com/1-grupo-vilson-projeto-front-end/projeto-front-end"
                  target="_blank"
                >
                  <AiOutlineLinkedin className="links" />
                </a>
              </div>
              <p className="credits">
                ©Projeto Front-End desenvolvido por: Daniel Matos | Esther Suriel
                Matheus Gomes | Sidarta Kauã |Tainá Tenório
              </p>
            </div>
          </div>
          <div className="logo">
            <img src={logo}></img>
          </div>
        </div>
      </footer>
    </FooterStyle>
  );
};
