import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { BrowserRouter } from "react-router-dom";
import App from "./App";
import AuthService from "./service/auth_service";
// import ImageUpload from "./service/image_uploader";

const authService = new AuthService();
// const ImageUploader = new ImageUpload();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App authService={authService} />
    </BrowserRouter>
  </React.StrictMode>
);
