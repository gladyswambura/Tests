import Axios from "axios";

const axiosInstance = Axios.create({
  baseURL: "https://www.vassbot.com/apis", // Base URL for all requests
  headers: {
    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcxODk1NDQ1NiwianRpIjoiMDE1ZjhhYWMtNmFmZS00NzNhLWIxZjMtNGM0NGExMDlmMDM4IiwidHlwZSI6ImFjY2VzcyIsInN1YiI6ImdsYWR5c3dhaGl0bzdAZ21haWwuY29tIiwibmJmIjoxNzE4OTU0NDU2LCJjc3JmIjoiMjdkOTcxNmUtM2Q5YS00ZmU4LTg5MDAtN2QwZTc0OTFjMjQyIiwiZXhwIjoxNzE4OTU4MDU2fQ.Sw4P1teQhzug-R7GPqqMhVltvZcZPnCgFSueaHhu894",
    "Content-Type": "application/json",
    "Accept": "application/json, text/plain, */*",
  },
  timeout: 0, 
});

export default axiosInstance;
