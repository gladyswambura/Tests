import Axios from "axios";

const axiosInstance = Axios.create({
  baseURL: "https://www.vassbot.com/apis", // Base URL for all requests
  headers: {
    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcxOTU1NDIzNywianRpIjoiNzBjNGI5YzgtMTAwNS00NGIyLTkyMTMtOGM0M2JlZmJiNTgwIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6ImdsYWR5c3dhaGl0bzdAZ21haWwuY29tIiwibmJmIjoxNzE5NTU0MjM3LCJjc3JmIjoiMWQ4OGQyNDktMmYxZi00ODUxLWEwOTAtNWM5NDUxOWZiOWQzIiwiZXhwIjoxNzE5NTU3ODM3fQ.nVBLezMZ48swfNe2Qde4ByoJB7tgk9Zu3FZ8DBLMOac",
    "Content-Type": "application/json",
    "Accept": "application/json, text/plain, */*",
  },
  timeout: 0, 
});

export default axiosInstance;
