import { useRef, useState } from "react";
import Button from "src/common/Button";
import { Card } from "src/types/Card";
import { CloudnaryFile } from "src/types/Image";
import { ButtonWraaper, Form, Input, TextArea } from "./styled";

interface Props {
  addCard: Function;
}

export default function CardAddForm({ addCard }: Props) {
  const formRef = useRef<HTMLFormElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const companyRef = useRef<HTMLInputElement>(null);
  const themeRef = useRef<HTMLSelectElement>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const [file, setFile] = useState<CloudnaryFile>({
    originalFilename: "",
    secureUrl: "",
  });

  const handleAdd = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const newCard: Card = {
      id: Date.now().toString(),
      name: nameRef.current?.value || "",
      company: companyRef.current?.value || "",
      theme: themeRef.current?.value as Card["theme"],
      title: titleRef.current?.value || "",
      email: emailRef.current?.value || "",
      message: messageRef.current?.value || "",
      fileName: file.originalFilename || "",
      fileUrl: file.secureUrl || "",
    };
    formRef.current?.reset();
    setFile({ originalFilename: "", secureUrl: "" });
    addCard(newCard);
  };

  const handleCardWhenFileChange = (uploaded: CloudnaryFile) => {
    const original_filename = uploaded.originalFileName;
    const secure_url = uploaded.secureUrl;
    setFile({
      original_filename,
      secure_url,
    });
  };

  return (
    <Form ref={formRef}>
      <Input type="text" name="name" placeholder="name" ref={nameRef} />
      <Input
        type="text"
        name="company"
        placeholder="company"
        ref={companyRef}
      />
      <select name="theme" ref={themeRef}>
        <option>light</option>
        <option>dark</option>
        <option>colorful</option>
      </select>
      <Input type="text" name="title" placeholder="title" ref={titleRef} />
      <Input type="text" name="email" placeholder="email" ref={emailRef} />
      <TextArea name="message" placeholder="message" ref={messageRef} />
      <ButtonWraaper>
        <p>FileInput</p>
        <Button name="Add" handleClick={handleAdd} color="#000000" />
      </ButtonWraaper>
    </Form>
  );
}
