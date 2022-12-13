import styled from "@emotion/styled";

export const Form = styled.form({
  display: "flex",
  flexWrap: "wrap",
  margin: "8px 48px",
  pading: "16px",
});

export const Input = styled.input({
  flex: "1 1 30%",
  fontSize: "16px",
  padding: "8px",
});

export const TextArea = styled.textarea({
  flexBasis: "100%",
  fontSize: "1rem",
  padding: "10px",
});

export const ButtonWraaper = styled.div`
  height: 32px;
  display: flex;
  flex-basis: 100%;

  & > * {
    flex: 1;
  }
`;
