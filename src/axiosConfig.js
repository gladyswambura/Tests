import Axios from "axios";

const axiosInstance = Axios.create({
  baseURL: "https://www.vassbot.com/apis", // Base URL for all requests
  headers: {
    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcxNzY5Nzk2MywianRpIjoiMTY3M2ZmZTctYWYzOC00NWE1LTgxMWYtZGY3Yjg0YTQ1MjhmIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6ImdsYWR5c3dhaGl0bzdAZ21haWwuY29tIiwibmJmIjoxNzE3Njk3OTYzLCJjc3JmIjoiZTkxYzFlNTItMzdiOC00NDE3LThlMzItYTcyYWFkMDY1NzFlIiwiZXhwIjoxNzE3NzAxNTYzfQ.qJGSj1-Ei8sXidtqVHnuWhXUEGMNEv3UvrLDJN5VLHI",
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
