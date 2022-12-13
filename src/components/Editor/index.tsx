import styled from "@emotion/styled";
import { Card } from "src/types/Card";

import CardAddForm from "./CardAddForm";
import CardEditForm from "./CardEditForm";

interface Props {
  cards: Card[];
  addCard: Function;
  deleteCard: Function;
  updateCard: Function;
  FileInput: Function;
}

const EditorContainer = styled.div({
  textAlign: "center",
  flexBasis: "50%",
  borderRight: "1px solid gray",
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

export default function Editor({
  cards,
  addCard,
  deleteCard,
  updateCard,
  FileInput,
}: Props) {
  return (
    <EditorContainer>
      <TitleText>Card Maker</TitleText>
      {cards.map((card) => (
        <CardEditForm
          key={card.id}
          card={card}
          deleteCard={deleteCard}
          updateCard={updateCard}
          FileInput={FileInput}
        />
      ))}
      <CardAddForm addCard={addCard} FileInput={FileInput} />
    </EditorContainer>
  );
}
