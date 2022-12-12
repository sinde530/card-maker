import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import App from "./App";
import AuthService from "./service/auth_service";
import { firebaseApp } from "./service/firebase";
import ImageUpload from "./service/image_uploader";

// console.log(import.meta.env.VITE_FIREBASE_API_KEY);

const authService = new AuthService(firebaseApp);
const ImageUploader = new ImageUpload();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App authService={authService} />
  </React.StrictMode>
);
