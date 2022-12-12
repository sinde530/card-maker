import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Editor from "../Editor";
import Header from "../Header";
import { Box, MakerContainer } from "./styled";

interface Props {
  authService: any;
}

export default function Maker(props: Props) {
  const { authService } = props;
  const navigate = useNavigate();

  const [cards, setCards] = useState({
    1: {
      id: "1",
      name: "SungEun1",
      company: "MT",
      theme: "dark",
      title: "FE",
      email: "sinde530@gmail.com",
      message: "go for it",
      fileName: "GANADA",
      fileURL: null,
    },
    2: {
      id: "2",
      name: "SungEun2",
      company: "MT",
      theme: "dark",
      title: "FE",
      email: "sinde530@gmail.com",
      message: "go for it",
      fileName: "GANADA",
      fileURL: null,
    },
    3: {
      id: "3",
      name: "SungEun3",
      company: "MT",
      theme: "dark",
      title: "FE",
      email: "sinde530@gmail.com",
      message: "go for it",
      fileName: "GANADA",
      fileURL: null,
    },
  });

  const handleLogout = () => {
    authService.logout();
  };

  const handleCreateOrUpdateCard = (card: {
    id: string;
    name: string;
    company: string;
    theme: string;
    title: string;
    email: string;
    message: string;
    fileName: string;
    fileURL: null;
  }) => {
    setCards((prev) => {
      const updated = { ...prev };
      updated[cards.id] = card;
      return updated;
    });
  };
  useEffect(() => {
    authService //
      .onAuthChange((user: any) => {
        console.log("user", user);
        if (user === null) {
          navigate("/card-maker");
        }
      });
  }, []);

  return (
    <MakerContainer>
      <Header onLogout={handleLogout} />
      <Box>
        <Editor
          addCard={handleCreateOrUpdateCard}
          updateCard={handleCreateOrUpdateCard}
          cards={cards}
        />
      </Box>
    </MakerContainer>
  );
}
