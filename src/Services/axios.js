import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/api",
});

export default  axiosInstance;

// baseURL: "https://diginiwas-admin-backend.onrender.com/api"