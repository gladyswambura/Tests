import Axios from "axios";

const axiosInstance = Axios.create({
  baseURL: "https://www.vassbot.com/apis", // Base URL for all requests
  headers: {
    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcxOTEyNTI5MiwianRpIjoiY2Q0MTZjMjYtZDQ4NC00ZjBjLWEyYjYtYzFmOTQ3MzU3MGIzIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6ImdsYWR5c3dhaGl0bzdAZ21haWwuY29tIiwibmJmIjoxNzE5MTI1MjkyLCJjc3JmIjoiMmFiYWE2NzctZTE3MC00NWVkLTllMDctYjVmZjU4MWEyN2JmIiwiZXhwIjoxNzE5MTI4ODkyfQ.Ffr_riKbFoz7cM1M75EIzGF8II58B5zdMVn5DU0RVPY",
    "Content-Type": "application/json",
    "Accept": "application/json, text/plain, */*",
  },
  timeout: 0, 
});

export default axiosInstance;
