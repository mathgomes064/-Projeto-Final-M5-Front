import react from "react";
import { useState } from "react";
import { Div } from "./styles";
import ModalPerfil from "../../modals/modalPerfil";
import AddServiceModal from "../../modals/AddServiceModal";
import ModalPremium from "../../modals/modalPremium";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setActiveMenu(!activeMenu);
  };

  const Logout = () => {
    localStorage.clear();
    navigate("/");
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
            <li>
              <ModalPerfil />
            </li>
            <li>
              <AddServiceModal />
            </li>
            <li>
              <ModalPremium />
            </li>
            <li>Meus Serviços</li>
            <li onClick={Logout}>Sair</li>
          </ul>
        </menu>
      </div>
    </Div>
  );
};

export default Menu;
