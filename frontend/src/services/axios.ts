import axios from "axios";
import { BACKEND_URL } from "@/utils/config";

const axiosInstance = axios.create({
  baseURL: BACKEND_URL,
  withCredentials: true,
});

export default axiosInstance;
