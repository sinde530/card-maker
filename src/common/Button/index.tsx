import styled from "@emotion/styled";
import { MouseEventHandler } from "react";

interface Props {
  name?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  color?: string;
  fontSize?: string;
}

const CustomButton = styled.button<Props>`
  background-color: ${({ color }) => color};
  border: 0;
  font-size: ${({ fontSize }) => `${fontSize}px` || "16px"};
  cursor: pointer;
  &:hover {
    opacity: 90%;
  }
`;

export default function Button({ name, handleClick, color, fontSize }: Props) {
  return (
    <CustomButton
      type="button"
      color={color}
      fontSize={fontSize}
      onClick={handleClick}
    >
      {name}
    </CustomButton>
  );
}
