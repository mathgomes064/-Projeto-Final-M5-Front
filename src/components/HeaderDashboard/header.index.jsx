import react from "react";
import MenuCategory from "../CategoryHeader";
import Menu from "../MenuHeader/menu.index";
import { ContainerHeader } from "./styles";
import { BiSearchAlt2 } from "react-icons/bi";
import logo from "../../assets/logo 2.png";

const HeaderDashboard = () => {
  return (
    <ContainerHeader>
      <section className="userInfo">
        <img className="imgUser" src="src/assets/Amongus 3.png" alt="user" />
        <div>
          <h2>Kenzinho</h2>
          <p>Desenvolvedor Freelancer</p>
        </div>
      </section>
      <section className="sectionNavegation">
        <img src={logo} alt="" />
        <div className="navegation">
          <Menu />
          <div className="divInput">
            <input type="text" placeholder="Pesquise um serviço" />
            <BiSearchAlt2 className="glass" />
          </div>
          <MenuCategory />
        </div>
      </section>
    </ContainerHeader>
  );
};

export default HeaderDashboard;
