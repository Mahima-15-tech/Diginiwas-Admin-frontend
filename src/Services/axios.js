import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://diginiwas-admin-backend.onrender.com/api",
});

export default  axiosInstance;