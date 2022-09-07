import react from "react";
import MenuCategory from "../CategoryHeader";
import Menu from "../MenuHeader/menu.index";
import logo from "../../assets/whiteLogo.png";
import { Header } from "./styles";
import { FiSearch } from "react-icons/fi";
const HeaderDashboard = () => {
  return (
    <Header>
      <section className="infoUser">
        {" "}
        <img
          className="imgUser"
          src="src/assets/Amongus 3.png"
          alt="foto do usuario"
        />
        <h2>Kenzinho</h2>
        <p>Desenvolvedor Freelancer</p>
      </section>
      <div className="navegationDiv">
        <section className="navegation">
          <img className="whiteLogo" src={logo} alt="logo branca" />
          <Menu />
          <div className="search">
            <input type="text" placeholder="Pesquise um serviço" />
            <button>
              <FiSearch className="searchIcon" />
            </button>
          </div>
          <MenuCategory />
        </section>
      </div>
    </Header>
  );
};

export default HeaderDashboard;
