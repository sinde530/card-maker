import { HeaderContainer, Logo, LogoutButton, Title } from "./styled";

interface Props {
  handleLogout?: () => void;
}

export default function Header({ handleLogout }: Props) {
  return (
    <HeaderContainer>
      {handleLogout && (
        <LogoutButton type="button" onClick={handleLogout}>
          Logout
        </LogoutButton>
      )}
      <Logo src="/public/logo.png" alt="img" />
      <Title>Card Makers</Title>
    </HeaderContainer>
  );
}
