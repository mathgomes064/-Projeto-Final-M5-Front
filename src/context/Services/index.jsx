import { createContext, useContext, useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../services/api";
import { UserContext } from "../User";

export const ServicesContext = createContext({});

const ServicesProvider = ({ children }) => {
  const { token } = useContext(UserContext);

  const [services, setServices] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      api.defaults.headers.authorization = `Bearer ${token}`;
      api.get("/services?_expand=user").then((res) => setServices(res));
    }
  }, [services]);

  //   api.get("/services).then((res) => setServices(res));

  const createService = (data, userId) => {
    const formattedData = {
      ...data,
      userId: userId,
    };

    api
      .post("/services", formattedData)
      .then(() =>
        toast.success("Serviço cadastrado com sucesso!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          toastId: 1,
        })
      )
      .catch(() =>
        toast.error("Algo deu errado!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          toastId: 1,
        })
      );
  };

  const editService = (data, serviceId) => {
    api
      .patch(`/services/${serviceId}`, data)
      .then(() =>
        toast.success("Serviço editado com sucesso!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          toastId: 1,
        })
      )
      .catch(() =>
        toast.error("Algo deu errado!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          toastId: 1,
        })
      );
  };

  const deleteService = (serviceId) => {
    api
      .patch(`/services/${serviceId}`)
      .then(() =>
        toast.success("Serviço deletado com sucesso!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          toastId: 1,
        })
      )
      .catch(() =>
        toast.error("Algo deu errado!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          toastId: 1,
        })
      );
  };

  return (
    <ServicesContext.Provider
      value={{ services, createService, editService, deleteService }}
    >
      {children}
    </ServicesContext.Provider>
  );
};

export default ServicesProvider;
