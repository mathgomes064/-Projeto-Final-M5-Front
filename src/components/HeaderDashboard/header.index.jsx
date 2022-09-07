import MenuCategory from "../CategoryHeader";
import Menu from "../MenuHeader/menu.index";
import { ContainerHeader } from "./styles";
import { BiSearchAlt2 } from "react-icons/bi";
import logo from "../../assets/logo 2.png";
import { useContext } from "react";
import { UserContext } from "../../context/User";

const HeaderDashboard = () => {
  const { user } = useContext(UserContext);

  return (
    <ContainerHeader>
      <section className="userInfo">
        <img className="imgUser" src={user.image} alt="user" />
        <div>
          <h2>{user.name}</h2>
          <p>{user.bio}</p>
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
