import ReactDOM from "react-dom/client";
import { BrowserRouter, Outlet } from "react-router-dom";
import "./index.css";

import App from "./App";
import { GoogleOAuthProvider } from "@react-oauth/google";
// import { Outlet } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
<GoogleOAuthProvider clientId="<your_client_id>">
    <App />
</GoogleOAuthProvider>
  </BrowserRouter>
);
