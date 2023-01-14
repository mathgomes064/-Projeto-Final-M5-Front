import axios from "axios";

const api = axios.create({
  baseURL: "https://nicejobs.onrender.com/api",
  timeout: 5000,
});

export default api;
