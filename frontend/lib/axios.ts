import axios from 'axios';

const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;

const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:8000/api/",
  headers: {
    Authorization: token ? `Bearer ${token}` : '',
    Accept: "application/json",
  },
});

export default axiosInstance;
