import Axios from "axios";
import { getItem } from "utils/localStorage";

const axiosInstance = Axios.create({
  baseURL: "https://www.vassbot.com/apis", // Base URL for all requests
  headers: {
    Authorization: `Bearer ${getItem("access_token")}`,
    "Content-Type": "application/json",
    "Accept": "application/json, text/plain, */*",
  },
  timeout: 0, 
});

export default axiosInstance;

