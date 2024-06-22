import Axios from "axios";

const axiosInstance = Axios.create({
  baseURL: "https://www.vassbot.com/apis", // Base URL for all requests
  headers: {
    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcxOTA1OTQzNCwianRpIjoiMDExMmQ3YzYtNDM0ZC00ZmI5LWJhMDUtZWE4MmFmMzEzMGM2IiwidHlwZSI6ImFjY2VzcyIsInN1YiI6ImdsYWR5c3dhaGl0bzdAZ21haWwuY29tIiwibmJmIjoxNzE5MDU5NDM0LCJjc3JmIjoiM2UwOThmMGMtNmZlNi00OWU1LThiOTItNzk3OWEwZTg2Y2UwIiwiZXhwIjoxNzE5MDYzMDM0fQ.PD0r3wgiHAkF9Vvhp_dCz9xbeL688KptRWKelwH19tQ",
    "Content-Type": "application/json",
    "Accept": "application/json, text/plain, */*",
  },
  timeout: 0, 
});

export default axiosInstance;
