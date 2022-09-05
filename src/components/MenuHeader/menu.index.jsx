import react from "react";
import { FaCrown } from "react-icons/fa";
import { useState } from "react";
import { Div } from "./styles";

const Menu = () => {
  const [activeMenu, setActiveMenu] = useState(false);

  const toggleMenu = () => {
    setActiveMenu(!activeMenu);
  };

  return (
    <Div>
      <div
        className={activeMenu ? "icon iconActive" : "icon"}
        onClick={toggleMenu}
      >
        <div className="hamburguer hamburguerIcon"></div>
      </div>
      <div className={activeMenu ? "menu menuOpen" : "menu menuClose"}>
        <menu className="list">
          <ul className="listItems">
            <li>Editar Perfil</li>
            <li>Cadastrar Serviço</li>
            <li>
              Nice Chat
              <FaCrown className="crown" />
            </li>
            <li>Meus Serviços</li>
            <li>Sair</li>
          </ul>
        </menu>
      </div>
    </Div>
  );
};

export default Menu;
