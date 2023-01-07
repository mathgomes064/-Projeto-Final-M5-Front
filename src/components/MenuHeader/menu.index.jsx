import { useState } from "react";
import { Div } from "./styles";
import { useContext } from "react";
import { UserContext } from "../../context/User";
import ModalPerfil from "../../modals/modalPerfil";
import AddServiceModal from "../../modals/AddServiceModal";
import ModalPremium from "../../modals/modalPremium";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Menu = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  const toggleMenu = () => {
    setActiveMenu(!activeMenu);
  };

  const Logout = () => {
    localStorage.clear();

    navigate("/");

    toast.success("Usuário deslogado com sucesso!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      toastId: 1,
    });
  };

  const toUserProfile = () => {
    navigate("/userprofile");
  };

  return (
    <Div>
      <div className="userName">
        <h1>{user?.username}</h1>
        <img
          onMouseOver={toggleMenu}
          className="imgUser"
          src={user?.image ? user.image : "./src/assets/Amongus 3.png"}
          alt="foto do usuario"
        />
      </div>
      <div onMouseLeave={toggleMenu} className={activeMenu ? "menu menuOpen" : "menu menuClose"}>
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
            <li onClick={toUserProfile}>Meus Serviços</li>
            <li onClick={Logout}>Sair</li>
          </ul>
        </menu>
      </div>
    </Div>
  );
};

export default Menu;
