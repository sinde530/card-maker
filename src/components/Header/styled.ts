import styled from "@emotion/styled";

export const HeaderContainer = styled.div({
  width: "100%",
  textAlign: "center",
  padding: "8px",
  position: "relative",
});

export const LogoutButton = styled.button({
  position: "absolute",
  right: "16px",
  padding: "8px",

  "&:hover": {
    transition: "0.4s",
    backgroundColor: "#1a73e8",
    border: "2px solid #000",
    color: "#FFFFFF",
  },
});

export const Logo = styled.img({
  width: "48px",
});

export const Title = styled.p({
  margin: 0,
});
