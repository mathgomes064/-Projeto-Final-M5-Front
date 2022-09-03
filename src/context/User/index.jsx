import { createContext } from "react";
import { useState } from "react";
import api from "../../services/api";

export const UserContext = createContext({});

const UserProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState({});

  const login = (data) => {
    api
      .post("/login", data)
      .then(({ data }) => {
        setToken(data.acessToken);
        setUser(data.user);
      })
      .catch((err) => console.log(err));
  };

  const register = (data) => {
    api.post("/register", data).catch((err) => console.log(err));
  };

  //   const userById = (id) =>{
  //     api.get(`/users/${id}`).then((res) => )
  //   }

  const editUser = (id, data) => {
    api
      .patch(`/users/${id}`, data)
      .then(({ data }) => setUser(data.user))
      .catch((err) => console.log(err));
  };

  const deleteUser = (id) => {
    if (token) {
      api.defaults.headers.authorization = `Bearer ${token}`;
      api.delete(`/users/${id}`).catch((err) => console.log(err));
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
