import HeaderUserProfile from "../../components/HeaderUserProfile";
import {
  ContainerCard,
  ContainerFooter,
  ContainerInfo,
  ContainerMain,
  ContainerService,
  UserInfo,
} from "./style";
import defaultUserProfilePic from "../../assets/Amongus 3.png";
import logo from "../../assets/newlogo.png";
import facebook from "../../assets/insta.png";
import instagram from "../../assets/face.png";
import linkedin from "../../assets/git.png";
import git from "../../assets/in.png";
import { UserContext } from "../../context/User";
import { useContext } from "react";

const UserProfile = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      <ContainerMain>
        <HeaderUserProfile />
        <UserInfo>
          <div className="innerDiv">
            <div className="data">
              <h1>username: {user?.username}</h1>
              <h1>email: {user?.email}</h1>
              <h1>phone: {user?.fone}</h1>
            </div>
            <div className="bio">
              <h1>{user?.bio}</h1>
            </div>
          </div>
        </UserInfo>
        <ContainerInfo>
          <ContainerService>
            <div className="tittleAndButton">
              <h1>Serviços:</h1>
              <div>
                <button>Cadastrados</button>
                <button>Contratados</button>
              </div>
            </div>
            <div className="services">
              <ul>
                { user?.services?.length === 0 ? (""):
                (user?.services?.map((service) => {
                  return(
                    <li key={service.id}>
                      <div>
                        <h1>{service.service_name}</h1>
                      </div>
                    </li>
                  )
                  }))}
              </ul>
            </div>
          </ContainerService>
          <ContainerCard>
            <div className="card">
              <div className="userInfo">
                <img src={defaultUserProfilePic} alt="" />
                <div>
                  <h1>{user?.username}</h1>
                  <span>Frete</span>
                  <p>R$100,00</p>
                </div>
              </div>

              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet est, maiores repellat
                molestias quo sapiente praesentium inventore quisquam dolor perspiciatis ad
                exercitationem accusamus earum aut ea id dolorum minus repudiandae?
              </p>

              <div className="editButtons">
                <button>Editar</button>
                <button>Deletar</button>
                <button>Finalizar</button>
              </div>
            </div>
          </ContainerCard>
        </ContainerInfo>
        <ContainerFooter> 
          <div className="innerDiv">
            <div className="footerImages">
              <div>
                <img src={instagram} alt="" />
                <img src={facebook} alt="" />
                <img src={git} alt="" />
                <img src={linkedin} alt="" />
              </div>
              <p>
                Desenvolvido por: Daniel Matos | Esther Suriel | Matheus Gomes |
                Sidarta Kauã |Tainá Tenório
              </p>
            </div>
            <img className="logo" src={logo} alt="" />
          </div>
        </ContainerFooter>
      </ContainerMain>
    </>
  );
};

export default UserProfile;
