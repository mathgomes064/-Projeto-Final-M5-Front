import HeaderUserProfile from "../../components/HeaderUserProfile";
import {
  ContainerCard,
  ContainerFooter,
  ContainerInfo,
  ContainerMain,
  ContainerService,
  UserInfo,
} from "./style";
import image from "../../assets/technology-pana.png";
import defaultUserProfilePic from "../../assets/Amongus 3.png";
import logo from "../../assets/newlogo.png";
import facebook from "../../assets/insta.png";
import instagram from "../../assets/face.png";
import linkedin from "../../assets/git.png";
import git from "../../assets/in.png";
import { UserContext } from "../../context/User";
import { ServicesContext } from "../../context/Services";
import { useContext } from "react";
import { useState } from "react";
import AddServiceModal from "../../modals/updateService";

const UserProfile = () => {
  const { filteredServices, deleteService } = useContext(ServicesContext);
  const { user } = useContext(UserContext);
  const [serviceP, setService] = useState(null);
  const [userE, setUser] = useState(user);
  const [serviceUpdate, setUpdate] = useState(false);
  const [serviceDelete, setDelete] = useState(false);

  return (
    <>
      <ContainerMain>
        {serviceUpdate ? <AddServiceModal /> : ""}
        {serviceDelete ? (
          <div className="options">
            <div className="deleteContaine">
              <p>Tem certeza que deseja deletar este serviço?</p>
              <div className="buttons">
                <button
                  onClick={() => {
                    setDelete(false);
                    deleteService(serviceP.id);
                    setService(null);
                    filteredServices.forEach((element, i) => {
                      if (element.id === serviceP.id) {
                        filteredServices.splice(i, 1);
                      }
                    });
                    user.services.forEach((service, i) => {
                      if (service.id === serviceP.id) {
                        user.services.splice(i, 1);
                      }
                    });
                  }}
                >
                  Sim
                </button>
                <button onClick={() => setDelete(false)}>Não</button>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        <HeaderUserProfile />
        <UserInfo>
          <div className="innerDiv">
            <div className="data">
              <h1>Nome: {user?.username}</h1>
              <h1>Email: {user?.email}</h1>
              <h1>Telefone: {user?.fone}</h1>
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
                {user?.services?.map((service) => {
                  return (
                    <li
                      key={service.id}
                      onClick={() => {
                        filteredServices.map((i) => {
                          if (i.id === service.id) {
                            setService(i);
                          }
                        });
                      }}
                    >
                      <div>
                        <h1>{service.service_name}</h1>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </ContainerService>

          <ContainerCard>
            {serviceP === null ? (
              <img src={image} />
            ) : (
              <div className="card">
                <div className="userInfo">
                  <img src={defaultUserProfilePic} alt="" />
                  <div>
                    <h1>{user?.username}</h1>
                    <span>{serviceP.category.name}</span>
                    <p>{serviceP.description.service_value}</p>
                  </div>
                </div>
                <p>
                  <span>Atuação:</span>
                  {serviceP.description.atuation_area}
                </p>
                <p>
                  <span>Serviço:</span>
                  {serviceP.service_name}
                </p>
                <p>
                  <span>Descrição:</span>
                  {serviceP.description.service_description}
                </p>

                <div className="editButtons">
                  <AddServiceModal service={serviceP} service_id={serviceP.id} />
                  <button onClick={() => setDelete(true)}>Deletar</button>
                  <button onClick={() => setService(null)}>Finalizar</button>
                </div>
              </div>
            )}
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
                ©Desenvolvido por: Daniel Matos | Gabriel Martins | Matheus Gomes | Paulo Silva | Rafael Formiga | Rodrigo Nunes
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
