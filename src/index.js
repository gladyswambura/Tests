import ReactDOM from "react-dom/client";
import { BrowserRouter, Outlet } from "react-router-dom";
import "./index.css";

import App from "./App";
// import { Outlet } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
