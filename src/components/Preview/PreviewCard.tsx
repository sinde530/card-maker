import styled from "@emotion/styled";
import { Card } from "src/types/Card";

interface Prop {
  card: Card;
}

interface ContainerProps {
  theme: Card["theme"];
}
interface MetaDataProps {
  theme: Card["theme"];
}
interface DataProps {
  $name?: boolean;
}

const Container = styled.li<ContainerProps>`
  display: flex;
  border: 1px solid black;
  border-radius: 1rem;
  margin: 0.5em 3em;
  padding: 1.2em;
  background: ${(props) => {
    switch (props.theme) {
      case "light":
        return "white";
      case "dark":
        return "black";
      case "colorful":
        return "linear-gradient(45deg, Violet, Orange)";
      default:
        return "white";
    }
  }};
  width: 100%;
  max-width: 35rem;
`;

const Image = styled.img`
  flex-basis: 15%;
  width: 8rem;
  height: 8rem;
  margin-right: 1.5em;
  border-radius: 50%;
`;
const MetaData = styled.div<MetaDataProps>`
  display: flex;
  flex-basis: 85%;
  flex-direction: column;
  color: ${({ theme }) => (theme === "dark" ? "white" : "black")};
`;
const Data = styled.span<DataProps>`
  font-size: ${(props) => (props.$name ? "1.8rem" : "1.2rem")};
  text-align: left;
  &:nth-child(2)::after {
    content: "";
    display: block;
    width: 90%;
    height: 1px;
    background-color: lightgray;
  }
`;

export default function PreviewCard({ card }: Prop) {
  const { id, name, company, theme, title, email, message, fileUrl } = card;

  return (
    <Container theme={theme}>
      <Image src="" alt="" />
      <MetaData theme={theme}>
        <Data $name>{name}</Data>
        <Data>{company}</Data>
        <Data>{title}</Data>
        <Data>{email}</Data>
        <Data>{message}</Data>
      </MetaData>
    </Container>
  );
}
