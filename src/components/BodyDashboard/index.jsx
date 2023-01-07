import { useContext } from "react";
import { ServicesContext } from "../../context/Services";

import { BodyStyle } from "./style";
import TransitionsModal from "../../modals/DetailsModal";
import EmptyServices from "../EmptyServices";

const BodyDashboard = () => {
  const { filteredServices } = useContext(ServicesContext);

  return (
    <BodyStyle>
      <h2>Encontre o seu serviço aqui</h2>
      <div className="services">
        <div className="servicesContainer">
          {filteredServices ? (
            filteredServices.length > 0 ? (
              filteredServices.map((service) => {
                return (
                  <div key={`${service.id} & ${service.user.id}`} className="serviceCard">
                    <img src={service.user.image} className="serviceImage"></img>
                    <p className="serviceName">{service.service_name}</p>
                    <p className="serviceUserName">{service.user.username}</p>
                    <p className="serviceValue">R$ {service.description.service_value}</p>
                    <TransitionsModal service={service}></TransitionsModal>
                  </div>
                );
              })
            ) : (
              <EmptyServices />
            )
          ) : (
            <EmptyServices />
          )}
        </div>
      </div>
    </BodyStyle>
  );
};

export default BodyDashboard;
