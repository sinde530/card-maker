import { useRef } from "react";
import Button from "src/common/Button";
import { Card } from "src/types/Card";

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
  // const [file, setFile] = useState<CloudinaryFile>({
  //   original_filename: "",
  //   secure_url: "",
  // });

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
      // filename: file.original_filename || "",
      // url: file.secure_url || "",
    };
    formRef.current?.reset();
    // setFile({ original_filename: "", secure_url: "" });
    addCard(newCard);
  };

  // const handleCardWhenFileChange = (uploaded: CloudinaryFile) => {
  //   const original_filename = uploaded.original_filename;
  //   const secure_url = uploaded.secure_url;
  //   setFile({
  //     original_filename,
  //     secure_url,
  //   });
  // };

  return (
    <form ref={formRef}>
      <input type="text" name="name" placeholder="name" ref={nameRef} />
      <input
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
      <input type="text" name="title" placeholder="title" ref={titleRef} />
      <input type="text" name="email" placeholder="email" ref={emailRef} />
      <textarea name="message" placeholder="message" ref={messageRef} />
      <div>
        <p>FileInput</p>
        <Button name="Add" handleClick={handleAdd} color="#000000" />
      </div>
    </form>
  );
}
