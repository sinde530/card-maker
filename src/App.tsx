import { Route, Routes } from "react-router-dom";
import { Container } from "./styled";

import Login from "./components/Login";
import Maker from "./components/Maker";

import AuthService from "./service/auth_service";

import { FireBaseRealTimeDB } from "./types/Firebase";

interface Props {
  FileInput: Function;
  fireBaseRealTiemDB: FireBaseRealTimeDB;
}

export default function App({ FileInput, fireBaseRealTiemDB }: Props) {
  const fireBaseAuthService = new AuthService();
  return (
    <Container>
      <Routes>
        <Route
          path="/card-maker"
          element={<Login fireBaseAuthService={fireBaseAuthService} />}
        />
        <Route
          path="/card-maker/maker"
          element={
            <Maker
              FileInput={FileInput}
              fireBaseRealTiemDB={fireBaseRealTiemDB}
              fireBaseAuthService={fireBaseAuthService}
            />
          }
        />
      </Routes>
    </Container>
  );
}
