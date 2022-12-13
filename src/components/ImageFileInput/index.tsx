import { css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";

import { ChangeEvent, useRef, useState } from "react";

import { CloudnaryFile, ImageUpload } from "src/types/Image";

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;
const Input = styled.input`
  display: none;
`;

const Button = styled.button<ButtonProps>`
  ${({ isLoading, hasFile }) => {
    if (isLoading) {
      return css`
        font-size: 0;
        width: 1.5rem;
        height: 1.5rem;
        border: 3px solid lightgray;
        border-top: 3px solid black;
        border-radius: 50%;
        background-color: transparent;
        animation: ${spin} 2s linear infinite;
        pointer-events: none;
      `;
    }
    if (hasFile) {
      return css`
        width: 100%;
        height: 100%;
        border: none;
        background-color: pink;
        cursor: pointer;
        &:hover {
          opacity: 0.9;
        }
      `;
    }
    return css`
      width: 100%;
      height: 100%;
      border: none;
      background-color: lightgrey;
      cursor: pointer;
      &:hover {
        opacity: 0.9;
      }
    `;
  }};
`;

interface ButtonProps {
  isLoading: Boolean;
  hasFile: Boolean;
}

interface ImageFileInputProps {
  imageUploader: ImageUpload;
  name?: string;
  handleCardWhenFileChange: (file: CloudnaryFile) => void;
}

export default function ImageFileInput({
  imageUploader,
  name,
  handleCardWhenFileChange,
}: ImageFileInputProps) {
  const [isLoading, setIsLoading] = useState<Boolean>(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    inputRef.current?.click();
  };

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    setIsLoading((loading) => !loading);
    const uploaded: CloudnaryFile = await imageUploader.upload(
      e.target.files[0]
    );

    handleCardWhenFileChange(uploaded);
    setIsLoading((loading) => !loading);
  };

  return (
    <Container>
      <Input
        type="file"
        accept="image/*"
        name="file"
        ref={inputRef}
        onChange={handleFileChange}
      />
      <Button
        onClick={handleButtonClick}
        isLoading={isLoading}
        hasFile={!!name}
      >
        {name || "No file"}
      </Button>
    </Container>
  );
}
