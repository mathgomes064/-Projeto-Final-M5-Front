import { useContext } from "react";
import { useState, useEffect } from "react";
import { UserContext } from "../../context/User";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";

import { BodyStyle } from "./style";

const Body = () => {
  const { token } = useContext(UserContext);

  const [services, setServices] = useState([]);

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
                  <button className="detailsButton">detalhes</button>
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
