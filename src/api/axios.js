import axios from "axios";
import { toast } from "react-toastify";

const axiosApiInstance = axios.create();

axiosApiInstance.interceptors.request.use(
  (config) => {
    const Authorization = localStorage.getItem("token");
    config.baseURL = window.location.origin.includes("localhost")
      ? process.env.REACT_APP_API_URL
      : window.location.origin + "/api";
    if (Authorization) {
      config.headers.Authorization = `Bearer ${Authorization}`;
    }
    return config;
  },
  (e) => {
    Promise.reject(e);
  }
);

axiosApiInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    try {
      toast.error("Something went wrong...");
      return Promise.reject(error);
    } catch (e) {
      return Promise.reject(e);
    }
  }
);

export default axiosApiInstance;
