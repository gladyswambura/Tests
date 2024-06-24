import Axios from "axios";

const axiosInstance = Axios.create({
  baseURL: "https://www.vassbot.com/apis", // Base URL for all requests
  headers: {
    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcxOTE5Mjk0NiwianRpIjoiYTBhMmEwOTUtN2I0NC00YjRlLWExNjMtOTBkZjFmY2JjNzVmIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6ImdsYWR5c3dhaGl0bzdAZ21haWwuY29tIiwibmJmIjoxNzE5MTkyOTQ2LCJjc3JmIjoiMGEzOWZiZjMtNzE2NC00ODFjLThlMGMtODRiN2ViYTdkNWUzIiwiZXhwIjoxNzE5MTk2NTQ2fQ.ah4nmyLA4uiwAyIgIpM-8JfT8X7W3t4x5aCjrecsKK0",
    "Content-Type": "application/json",
    "Accept": "application/json, text/plain, */*",
  },
  timeout: 0, 
});

export default axiosInstance;
