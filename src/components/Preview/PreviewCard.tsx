import { Card } from "src/types/Card";

interface Prop {
  card: Card;
}

export default function PreviewCard({ card }: Prop) {
  return <div>PreviewCard</div>;
}
