import {
  Database,
  getDatabase,
  off,
  onValue,
  ref,
  remove,
  set,
} from "firebase/database";
import { Card } from "src/types/Card";
import { FireBaseRealTimeDB } from "src/types/Firebase";
import { firebaseApp } from "./firebase";

export default class FireBaseRealTimeDBImpl implements FireBaseRealTimeDB {
  private database: Database;

  constructor() {
    this.database = getDatabase(firebaseApp);
  }

  setCards(userId: string, card: Card) {
    set(ref(this.database, `users/${userId}/cards/${card.id}`), card);
  }

  syncCards(
    userId: string,
    setCards: React.Dispatch<React.SetStateAction<Card[]>>
  ) {
    const syncRef = ref(this.database, `users/${userId}/cards/`);
    onValue(syncRef, (snapshot) => {
      const arrCards: Card[] = [];
      const cards = snapshot.val();
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      cards && Object.keys(cards).map((key) => arrCards.push(cards[key]));
      console.log(cards);

      setCards(arrCards);
    });

    return () => off(syncRef); // Detach listeners function
  }

  removeCard(userId: string, cardId: string) {
    remove(ref(this.database, `users/${userId}/cards/${cardId}`));
  }
}
