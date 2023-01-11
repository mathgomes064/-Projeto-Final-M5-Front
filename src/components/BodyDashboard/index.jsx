import { useContext } from "react";
import { ServicesContext } from "../../context/Services";

import { BodyStyle } from "./style";
import TransitionsModal from "../../modals/DetailsModal";
import EmptyServices from "../EmptyServices";
import Animation from "../dashboardCall";

const BodyDashboard = () => {
  const { filteredServices } = useContext(ServicesContext);

  return (
    <BodyStyle>
      {filteredServices?.length === 0? (""):
      (<Animation/>)}
      <div className="services">
        <div className="servicesContainer">
          {filteredServices ? (
            filteredServices.length > 0 ? (
              filteredServices.map((service) => {
                return (
                  <div key={`${service.id} & ${service.user.id}`} className="serviceCard">
                    <img src={`img/${service.category.name}.jpg`} className="serviceImage"></img>
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
