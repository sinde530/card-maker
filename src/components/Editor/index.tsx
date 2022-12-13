import { Card } from "src/types/Card";

import CardAddForm from "./CardAddForm";
import CardEditForm from "./CardEditForm";

interface Props {
  cards: Card[];
  addCard: Function;
  deleteCard: Function;
  updateCard: Function;
}

export default function Editor({
  cards,
  addCard,
  deleteCard,
  updateCard,
}: Props) {
  return (
    <div>
      <h2>Card Maker</h2>
      {cards.map((card) => (
        <CardEditForm
          key={card.id}
          card={card}
          deleteCard={deleteCard}
          updateCard={updateCard}
        />
      ))}
      <CardAddForm addCard={addCard} />
    </div>
  );
}
