import MenuCategory from "../CategoryHeader";
import Menu from "../MenuHeader/menu.index";
<<<<<<< HEAD
import logo from "../../assets/whiteLogo.png";
import { Header } from "./styles";
import { FiSearch } from "react-icons/fi";
=======
import { ContainerHeader } from "./styles";
import { BiSearchAlt2 } from "react-icons/bi";
import logo from "../../assets/logo 2.png";
import { useContext } from "react";
import { UserContext } from "../../context/User";

>>>>>>> 295f3f8f722cd197c271d17228c41ae663816f5c
const HeaderDashboard = () => {
  const { user } = useContext(UserContext);

  return (
<<<<<<< HEAD
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
=======
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
>>>>>>> 295f3f8f722cd197c271d17228c41ae663816f5c
  );
};

export default HeaderDashboard;
