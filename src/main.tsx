import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";

import App from "./App";

import FireBaseRealTimeDBImpl from "./service/firebase_realtime_db";

const fireBaseRealTimeDB = new FireBaseRealTimeDBImpl();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App fireBaseRealTiemDB={fireBaseRealTimeDB} />
    </BrowserRouter>
  </React.StrictMode>
);
