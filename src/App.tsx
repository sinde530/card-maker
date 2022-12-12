import { Route, Routes } from "react-router-dom";
import styled from "@emotion/styled";

import Login from "./components/Login";
import Maker from "./components/Maker";

import AuthService from "./service/auth_service";

interface Props {
  authService: AuthService;
}

const Container = styled.div({
  width: "100%",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#626262",
});

function App({ authService }: Props) {
  return (
    <Container>
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
    </Container>
  );
}

export default App;
