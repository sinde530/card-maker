import styled from "@emotion/styled";
import { Card } from "src/types/Card";
import PreviewCard from "./PreviewCard";

interface Prop {
  cards: Card[];
}

const EditorContainer = styled.div({
  textAlign: "center",
  flexBasis: "50%",
  overflowY: "auto",
});

const TitleText = styled.h1({
  fontSize: "24px",
  position: "sticky",
  top: "0px",
  padding: "8px",
  marginTop: "0",
  backgroundColor: "wheat",
  color: "#000000",
});

const Ul = styled.ul({
  display: "flex",
  flexDirection: "column",
  alignItems: "0",
  paddingLeft: "0",
  width: "100%",
});

export default function Preview({ cards }: Prop) {
  return (
    <EditorContainer>
      <TitleText>Card Preview</TitleText>
      <Ul>
        {cards.map((card) => (
          <PreviewCard card={card} key={card.id} />
        ))}
      </Ul>
    </EditorContainer>
  );
}
