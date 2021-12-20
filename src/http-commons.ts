import axios, { AxiosInstance } from "axios";

const apiClient: AxiosInstance = axios.create({
  baseURL: "http://10.170.1.105:3000",
  headers: {
    "Content-type": "application/json",
  },
});

export default apiClient;