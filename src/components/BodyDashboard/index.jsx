import { useContext } from "react";
import { useState, useEffect } from "react";
import { UserContext } from "../../context/User";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";

import { BodyStyle } from "./style";
import TransitionsModal from "../../modals/DetailsModal";

const Body = () => {
  const { token } = useContext(UserContext);

  const [services, setServices] = useState([
    {
      name: "Transporte",
      category: "Construção civil",
      description: "adsaadsdasdas",
      value: 10,
      status: false,
      userId: 1,
      id: 1,
      user: {
        email: "matheus@mail.com",
        password:
          "$2a$10$TMn/xsO7A/NkDGCZRuxZPeuupWo/DEx/8Qm3N9iJVL2tMo9vxL6Gu",
        name: "Matheus Gomes",
        contact: "92940028922",
        bio: "Graduando em Economia",
        type: "Solicitar Serviço",
        id: 1,
        image: null,
        premium: false,
      },
    },
    {
      name: "Transporte",
      category: "Frete",
      description: "adsaadsdasdas",
      value: 100,
      status: false,
      userId: 1,
      id: 2,
      user: {
        email: "matheus@mail.com",
        password:
          "$2a$10$TMn/xsO7A/NkDGCZRuxZPeuupWo/DEx/8Qm3N9iJVL2tMo9vxL6Gu",
        name: "Matheus Gomes",
        contact: "92940028922",
        bio: "Graduando em Economia",
        type: "Solicitar Serviço",
        id: 1,
        image: null,
        premium: false,
      },
    },
  ]);

  return (
    <BodyStyle>
      <body>
        <h2>Encontre seu serviço aqui</h2>
        <div className="services">
          <button className="nextButton">
            <AiOutlineDoubleLeft className="nextButton" />
          </button>
          <div className="servicesContainer">
            {services.map((service) => {
              return (
                <div key={service.id} className="serviceCard">
                  <img src={service.user.image} className="serviceImage"></img>
                  <p className="serviceName">{service.name}</p>
                  <p className="serviceUserName">{service.user.name}</p>
                  <p className="serviceValue">R$ {service.value},00</p>
                  <TransitionsModal service={service}></TransitionsModal>
                </div>
              );
            })}
          </div>
          <button className="nextButton">
            <AiOutlineDoubleRight className="nextButton" />
          </button>
        </div>
      </body>
    </BodyStyle>
  );
};

export default Body;
