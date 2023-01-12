import ModalPerfil from "../../modals/modalPerfil";
import AddServiceModal from "../../modals/AddServiceModal";
import ModalPremium from "../../modals/modalPremium";

import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../context/User";
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import { Div } from "./styles";
import { FaChevronDown } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg'
import { CgToolbox } from 'react-icons/cg'
import { BsFillChatDotsFill } from 'react-icons/bs'
import { RiFolderUserLine } from 'react-icons/ri'
import { CgLogOut } from 'react-icons/cg'

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
      <div onMouseUp={toggleMenu} className="userName">
        <FaChevronDown id="dropArrow" size={10}/>
        <h1>{user?.username}</h1>
        <div>
        <img
          className="imgUser"
          src={user?.image ? user.image : "./src/assets/Amongus 3.png"}
          alt="foto do usuario"
        />
        </div>
      </div>
      <div className={activeMenu ? "menu menuOpen" : "menu menuClose"}>
        <menu onMouseLeave={toggleMenu} onMouseUp={toggleMenu} className="list">
          <ul className="listItems">
            <li>
              <CgProfile size={20} />
              <ModalPerfil />
            </li>
            <li>
              <CgToolbox size={20}/>
              <AddServiceModal />
            </li>
            <li>
              <BsFillChatDotsFill size={20}/>
              <ModalPremium />
            </li>
            <li onClick={toUserProfile}>
              <RiFolderUserLine size={20}/>
              Meus Serviços</li>
            <li onClick={Logout}>
            <CgLogOut size={20}/>
              Sair</li>
          </ul>
        </menu>
      </div>
    </Div>
  );
};

export default Menu;
