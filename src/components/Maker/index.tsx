import { User } from "firebase/auth";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AuthService from "src/service/auth_service";
import { Card } from "src/types/Card";
import { FireBaseRealTimeDB } from "src/types/Firebase";
import Editor from "../Editor";
import Header from "../Header";
import { Box, MakerContainer } from "./styled";

interface Props {
  fireBaseRealTiemDB: FireBaseRealTimeDB;
  fireBaseAuthService: AuthService;
}

interface LoginResult {
  userId: string;
}

export default function Maker({
  fireBaseRealTiemDB,
  fireBaseAuthService,
}: Props) {
  const [cards, setCards] = useState<Card[]>([]);
  const navigate = useNavigate();
  const location = useLocation().state as LoginResult;
  const { userId } = location;

  useEffect(() => {
    const goToLogin = (): void => {
      navigate("/card-maker");
    };

    fireBaseAuthService.onAuthChange((user: User | null) => {
      if (!user) {
        goToLogin();
      }
    });
  }, [fireBaseAuthService, navigate]);

  useEffect(() => {
    const stopSync = fireBaseRealTiemDB.syncCards(userId, setCards);

    return () => stopSync(); // Detach listeners
  }, [fireBaseRealTiemDB, userId]);

  const addCard = (newCard: Card) => {
    setCards((card) => {
      fireBaseRealTiemDB.setCards(userId, newCard);
      return [...card, newCard];
    });
  };

  const deleteCard = (id: string): void => {
    setCards((cardData) => cardData.filter((card) => card.id !== id));
    fireBaseRealTiemDB.removeCard(userId, id);
  };

  const updateCard = (updatedCard: Card): void => {
    const updated: Card[] = cards.map((card) =>
      card.id === updatedCard.id ? updatedCard : card
    );
    setCards(() => {
      fireBaseRealTiemDB.setCards(userId, updatedCard);
      return updated;
    });
  };

  const handleLogout = (): void => {
    fireBaseAuthService.logout();
  };

  return (
    <MakerContainer>
      <Header handleLogout={handleLogout} />
      <Box>
        <Editor
          cards={cards}
          addCard={addCard}
          deleteCard={deleteCard}
          updateCard={updateCard}
        />
      </Box>
      Preview Component
    </MakerContainer>
  );
}
