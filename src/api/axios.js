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
      if (!config.url.includes("delivery")) {
        config.headers["Content-Type"] = "multipart/form-data";
        config.headers["enctype"] = "multipart/form-data";
      }
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
      toast.error("Что-то пошло не так...");
      return Promise.reject(error);
    } catch (e) {
      return Promise.reject(e);
    }
  }
);

export default axiosApiInstance;
