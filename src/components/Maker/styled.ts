import styled from "@emotion/styled";

export const MakerContainer = styled.div({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
});

export const Box = styled.div`
  display: flex;
  flex: 1;

  @media screen and (max-width: 42rem) {
    flex-direction: column;
  }
`;
