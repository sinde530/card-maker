/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useEffect } from "react";
import { NavigateOptions, useNavigate } from "react-router-dom";
import Header from "../Header";

import { LoginContainer, Li, Ul, GoogleButton, GithubButton } from "./styled";

interface Props {
  authService: any;
}

export default function Login(props: Props) {
  const uid: string = "";
  const { authService } = props;
  const navigate = useNavigate();

  const GoToMaker = (userId: any) => {
    // 두 번째 인수의 타입을 NavigateOptions로 변경
    if (userId) {
      navigate("maker", { id: userId } as NavigateOptions);
    }
  };

  const handleClickLogin = (e: any) => {
    authService
      .login(e.currentTarget.textContent)
      .then((data: any) => GoToMaker(data.user.uid));
  };

  useEffect(() => {
    authService.onAuthChange((user: any) => {
      user && GoToMaker(uid);
    });
  }, []);

  return (
    <LoginContainer>
      <Header onLogout={undefined} />
      <div>
        <h1>Social Login Pages</h1>
        <Ul>
          <Li>
            <GoogleButton type="button" onClick={handleClickLogin}>
              Google
            </GoogleButton>
          </Li>
          <Li>
            <GithubButton type="button" onClick={handleClickLogin}>
              GitHub
            </GithubButton>
          </Li>
        </Ul>
      </div>
      <p>Footer Component</p>
    </LoginContainer>
  );
}
