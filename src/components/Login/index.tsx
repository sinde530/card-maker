/* eslint-disable @typescript-eslint/no-unused-expressions */
import { User } from "firebase/auth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FireBaseAuthService } from "src/types/Firebase";
import Header from "../Header";

import { LoginContainer, Li, Ul, GoogleButton } from "./styled";

interface Props {
  fireBaseAuthService: FireBaseAuthService;
}

export default function Login({ fireBaseAuthService }: Props) {
  const navigate = useNavigate();

  const goToMaker = (userId: string) => {
    navigate("maker", { state: { userId } });
  };

  const handleClickLogin = (providerName: string) => {
    fireBaseAuthService.login(providerName).then((result) => {
      goToMaker(result.user.uid);
    });
  };

  useEffect(() => {
    fireBaseAuthService.onAuthChange((user: User | null) => {
      user && goToMaker(user.uid);
    });
  }, []);

  return (
    <LoginContainer>
      <Header />
      <div>
        <h1>Social Login Pages</h1>
        <Ul>
          <Li>
            <GoogleButton
              type="button"
              onClick={() => handleClickLogin("google")}
            >
              Google
            </GoogleButton>
          </Li>
          {/* <Li>
            <GithubButton type="button" onClick={handleClickLogin}>
              GitHub
            </GithubButton>
          </Li> */}
        </Ul>
      </div>
      <p>Footer Component</p>
    </LoginContainer>
  );
}
