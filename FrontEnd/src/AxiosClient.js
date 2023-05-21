import axios from "axios";
import { get } from "./Services/LocalStorageService";

const axiosClient = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
});

axiosClient.interceptors.request.use((config) => {
  const token = get("TOKEN_USER") ? get("TOKEN_USER") : get("TOKEN_DOCTOR");
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default axiosClient;
