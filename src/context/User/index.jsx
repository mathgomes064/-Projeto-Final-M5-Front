import { createContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../services/api";

export const UserContext = createContext({});

const UserProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const [user, setUser] = useState({});

  const navigate = useNavigate();

  const login = (data) => {
    api
      .post("/login", data)
      .then(({ data }) => {
        setToken(data.accessToken);
        setUser(data.user);
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
      );
  };

  const register = ({ email, name, password, contact, bio, type }) => {
    const formattedData = { email, name, password, contact, bio, type };

    api
      .post("/register", formattedData)
      .then(() => {
        navigate("/");
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

  const editUser = (id, data) => {
    if (token) {
      api.defaults.headers.authorization = `Bearer ${token}`;

      api
        .patch(`/users/${id}`, data)
        .then(({ data }) => {
          setUser(data.user);
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
      value={{ token, user, login, register, editUser, deleteUser }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
