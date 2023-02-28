import axios from "axios";

const api = axios.create({
  // baseURL: "https://nicejobs.onrender.com/api",
  baseURL: "http://localhost:8000/api",
  timeout: 8000,
});

export default api;
