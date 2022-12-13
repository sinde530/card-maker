import { Card } from "src/types/Card";
import PreviewCard from "./PreviewCard";

interface Prop {
  cards: Card[];
}

export default function Preview({ cards }: Prop) {
  return (
    <div>
      <h1>Card Preview</h1>
      <ul>
        {cards.map((card) => (
          <PreviewCard card={card} key={card.id} />
        ))}
      </ul>
    </div>
  );
}
