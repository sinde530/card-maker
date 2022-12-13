import { UserCredential } from "firebase/auth";

import { Card } from "./Card";

export interface FireBaseAuthService {
  login: (providerName: string) => Promise<UserCredential>;
  logout(): void;
  onAuthChange: (onUserChanged: Function) => void;
}

export interface FireBaseRealTimeDB {
  setCards: (userId: string, card: Card) => void;
  removeCard: (userId: string, cardId: string) => void;
  syncCards: (
    userId: string,
    setCards: React.Dispatch<React.SetStateAction<Card[]>>
  ) => Function;
}
