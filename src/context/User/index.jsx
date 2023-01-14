import { createContext, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../services/api";

export const UserContext = createContext({});

const UserProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("@Nice-jobs:token"));
  const [user, setUser] = useState({});
  const [services, setServices] = useState(null);
  const [filteredServices, setFilteredServices] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const location = useLocation();

  useEffect(() => {
    if (token) {
      api.defaults.headers.authorization = `Bearer ${token}`;
      api
        .get("users/profile/")
        .then(({ data }) => {
          localStorage.setItem("@Nice-jobs:id", data.id);
          setUser(data);
        })
        .catch((err) => {
          console.log(err)
          signOut()
        });
    } else {
      signOut();
    }
  }, [token, services]);

  function signOut() {
    setUser(null);
    localStorage.clear();
    navigate("/", { replace: true });
  }

  const login = (data) => {
    setLoading(true);
    api
      .post("/login/", data)
      .then(({ data }) => {
        localStorage.setItem("@Nice-jobs:token", data.access);
        setToken(data.access);
        setToken(data.access);

        navigate("/dashboard", { replace: true });
        setLoading(false)
        

        toast.success("Usuário logado com sucesso!", {
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
        {
          setLoading(false);
          toast.error("Email ou senha inválidos!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            toastId: 1,
          })
          
        }
      );
  };

  const register = ({ email, username, password, fone, bio, is_offering }) => {
    const data = {
      email,
      username,
      password,
      fone,
      bio,
      is_offering: is_offering === "Fornecer Serviço",
      image:
        "https://imgs.search.brave.com/KbRNVWFimWUnThr3tB08-RFa0i7K1uc-zlK6KQedwUU/rs:fit:860:752:1/g:ce/aHR0cHM6Ly93d3cu/a2luZHBuZy5jb20v/cGljYy9tLzI0LTI0/ODI1M191c2VyLXBy/b2ZpbGUtZGVmYXVs/dC1pbWFnZS1wbmct/Y2xpcGFydC1wbmct/ZG93bmxvYWQucG5n",
    };

    api
      .post("/users/", data)
      .then(() => {
        navigate("/", { replace: true });
        toast.success("Usuário cadastrado com sucesso!", {
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
        toast.error("Email já cadastrado.", {
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

  // const userById = (id) => {
  // if (token) {
  //   api.defaults.headers.authorization = `Bearer ${token}`;
  //
  //   api.get(`/users/${id}`).then((res) => console.log(res));
  // }
  // };

  const editUser = (data, id) => {
    if (token) {
      api.defaults.headers.authorization = `Bearer ${token}`;
      api
        .patch(`/users/${id}/`, data)
        .then(({ data }) => {
          setUser(data);
          toast.success("Usuário editado com sucesso!", {
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
          toast.error("Ocorreu algum erro!", {
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
    }
  };

  const deleteUser = (id) => {
    if (token) {
      api.defaults.headers.authorization = `Bearer ${token}`;

      api
        .delete(`/users/${id}`)
        .then(() =>
          toast.success("Usuário deletado com sucesso!", {
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
          toast.error("Ocorreu algum erro!", {
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
    }
  };

  return (
    <UserContext.Provider
      value={{
        token,
        user,
        login,
        register,
        editUser,
        deleteUser,
        setServices,
        services,
        filteredServices,
        setFilteredServices,
        loading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
