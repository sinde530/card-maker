import { HeaderContainer, Logo, LogoutButton, Title } from "./styled";

interface Props {
  onLogout: any;
}

export default function Header({ onLogout }: Props) {
  return (
    <HeaderContainer>
      {onLogout && (
        <LogoutButton type="button" onClick={onLogout}>
          Logout
        </LogoutButton>
      )}
      <Logo src="/public/logo.png" alt="img" />
      <Title>Card Makers</Title>
    </HeaderContainer>
  );
}
