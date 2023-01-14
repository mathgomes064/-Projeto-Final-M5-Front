import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import api from "../../services/api";
import { UserContext } from "../User";

export const ServicesContext = createContext({});

const ServicesProvider = ({ children }) => {
  const { token, services, setServices, setFilteredServices, filteredServices } =
    useContext(UserContext);

    const [currentPage, setCurrentPage] = useState("?page=1")

    useEffect(() => {
      if (token) {
        api.defaults.headers.authorization = `Bearer ${token}`;
        api.get(`/services${currentPage}`).then((res) => {
          setServices(res.data.results);
          setFilteredServices(res.data.results);
        });
      }
    }, [token, currentPage]);

    
    const handlePagination = (e) => {
      api.get(`/services${currentPage}`).then((res) => {
        let {next, previous} = res.data
        const nextSliceIndex = next?.split("").findIndex(str => str == "?")
        const previousSliceIndex = previous?.split("").findIndex(str => str == "?")
        next = next?.slice(nextSliceIndex)
        previous = previous?.slice(previousSliceIndex)

        if(e.innerText == "Próxima") {
          if(next !== undefined) {
            setCurrentPage(next)
          } 
        } else {
          if(typeof previous == undefined || previous !== "/") {
            setCurrentPage("?page=1")
          } else {
            setCurrentPage(previous)
          }
        }
        
      })
  
    }

  const createService = (data) => {
    const formattedData = {
      service_name: data.service_name,
      description: {
        service_description: data.service_description,
        service_value: data.service_value,
        atuation_area: "Brasil",
      },
      category: {
        name: data.category,
      },
    };

    api
      .post("/services/", formattedData)
      .then(() => {
        toast.success("Serviço cadastrado com sucesso!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          toastId: 1,
        });

        api.get("/services/").then((res) => {
          setServices(res.data.results);
          setFilteredServices(res.data.results);
        });
      })
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
    const formattedData = {
      service_name: data.service_name,
      description: {
        service_description: data.service_description,
        service_value: data.service_value,
        atuation_area: "Brasil",
      },
      category: {
        name: data.category,
      },
    };
    api
      .patch(`/services/${serviceId}/`, formattedData)
      .then(() => {
        api.get("/services/").then((res) => {
          setServices(res.data.results);
          setFilteredServices(res.data.results);
        });
        toast.success("Serviço editado com sucesso!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          toastId: 1,
        });
      })
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
      .delete(`/services/${serviceId}`)
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

  const filterCategory = (filterType) => {
    if (filterType === "Todos") {
      setFilteredServices(services);
    } else {
      setFilteredServices(services.filter(({ category }) => category.name === filterType));
    }
  };

  const filterSearchField = (searchField) => {
    if (searchField !== "".trim()) {
      setFilteredServices(
        services.filter(
          ({ category, service_name, user }) =>
            category.name
              .toLocaleLowerCase()
              .trim()
              .includes(searchField.toLocaleLowerCase().trim()) ||
            service_name
              .toLocaleLowerCase()
              .trim()
              .includes(searchField.toLocaleLowerCase().trim()) ||
            user.username
              .toLocaleLowerCase()
              .trim()
              .includes(searchField.toLocaleLowerCase().trim())
        )
      );
    } else {
      setFilteredServices(services);
    }
  };

  return (
    <ServicesContext.Provider
      value={{
        handlePagination,
        services,
        createService,
        editService,
        deleteService,
        filterCategory,
        filteredServices,
        filterSearchField,
      }}
    >
      {children}
    </ServicesContext.Provider>
  );
};

export default ServicesProvider;
