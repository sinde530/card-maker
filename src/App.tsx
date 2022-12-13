import { Route, Routes } from "react-router-dom";
import styled from "@emotion/styled";

import Login from "./components/Login";
import Maker from "./components/Maker";

import AuthService from "./service/auth_service";
import { FireBaseRealTimeDB } from "./types/Firebase";

interface Props {
  fireBaseRealTiemDB: FireBaseRealTimeDB;
}

const Container = styled.div({
  width: "100%",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#626262",
});

function App({ fireBaseRealTiemDB }: Props) {
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
              fireBaseRealTiemDB={fireBaseRealTiemDB}
              fireBaseAuthService={fireBaseAuthService}
            />
          }
        />
      </Routes>
    </Container>
  );
}

export default App;
