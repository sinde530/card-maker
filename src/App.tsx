import { Route, Routes } from "react-router-dom";
import reactLogo from "./assets/react.svg";

import "./App.css";

import Login from "./components/Login";
import AuthService from "./service/auth_service";
import Maker from "./components/Maker";

interface Props {
  authService: AuthService;
}

function App({ authService }: Props) {
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Card Maker</h1>
      <Routes>
        <Route
          path="/card-maker"
          element={<Login authService={authService} />}
        />
        <Route
          path="/card-maker/maker"
          element={<Maker authService={authService} />}
        />
      </Routes>
    </div>
  );
}

export default App;
