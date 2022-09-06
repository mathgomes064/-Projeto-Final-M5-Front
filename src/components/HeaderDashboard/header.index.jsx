import react from "react";
import MenuCategory from "../CategoryHeader";
import Menu from "../MenuHeader/menu.index";
import { Header } from "./styles";

const HeaderDashboard = () => {
  return (
    <Header>
      <img
        className="imgUser"
        src="src/assets/Amongus 3.png"
        alt="foto do usuario"
      />
      <section className="infoUser">
        <h2>Kenzinho</h2>
        <p>Desenvolvedor Freelancer</p>
      </section>
      <section className="navegation">
        <input type="text" placeholder="Pesquise um serviço" />
        <Menu />
        <MenuCategory />
      </section>
    </Header>
  );
};

export default HeaderDashboard;
