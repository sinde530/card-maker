import styled from "@emotion/styled";

export const LoginContainer = styled.div({
  width: "540px",
  textAlign: "center",
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: "#333",
  display: "flex",
});

export const Ul = styled.ul({
  width: "100%",
  // padding: "8px",
});

export const Li = styled.li({
  marginBottom: "8px",
});

export const GoogleButton = styled.button({
  width: "100%",
  height: "40px",
  fontSize: "18px",
  borderRadius: "32px",
  backgroundColor: "#385461",
  background: "#ffffff",
  color: "#000000",
  cursor: "pointer",

  "&:hover": {
    backgroundColor: "#1a73e8",
    border: "2px solid #000",
    color: "#FFFFFF",
  },
});

export const GithubButton = styled.button({
  width: "100%",
  height: "40px",
  fontSize: "18px",
  borderRadius: "32px",
  backgroundColor: "#385461",
  background: "#ffffff",
  color: "#000000",
  cursor: "pointer",

  "&:hover": {
    backgroundColor: "#4c7e16",
    border: "2px solid #000",
    color: "#FFFFFF",
  },
});
