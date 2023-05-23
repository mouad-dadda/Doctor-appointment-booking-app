import axios from "axios";
import { get } from "./Services/LocalStorageService";

const axiosClient = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
});

axiosClient.interceptors.request.use((config) => {
  let token;
  if (get("TOKEN_USER")) {
    token = get("TOKEN_USER");
  } else if (get("TOKEN_DOCTOR")) {
    token = get("TOKEN_DOCTOR");
  } else if (get("TOKEN_ADMIN")) {
    token = get("TOKEN_ADMIN");
  }
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default axiosClient;
