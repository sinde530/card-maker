import CreateEditForm from "./CreateEditForm";

interface Props {
  addCard: any;
  updateCard: any;
  cards: { [key: string]: any };
}

export default function Editor({ addCard, updateCard, cards }: Props) {
  return (
    <div>
      {Object.keys(cards).map((key) => (
        <CreateEditForm
          key={key}
          // FileInput={FileInput}
          card={cards[key]}
          updateCard={updateCard}
          // deleteCard={deleteCard}
        />
      ))}
    </div>
  );
}
