import { useRef } from "react";

interface Props {
  // FileInput: React.ReactNode;
  card: { [key: string]: any };
  updateCard: (id: string, card: any) => void;
  // deleteCard: (id: string) => void;
}

export default function CreateEditForm({ updateCard, card }: Props) {
  const { name, company, title, email, message, theme } = card;

  const nameRef = useRef(null);
  const companyRef = useRef(null);
  const themeRef = useRef(null);
  const titleRef = useRef(null);
  const messageRef = useRef(null);

  const onChange = (e: any) => {
    if (e.currentTarget == null) {
      return;
    }
    e.preventDefault();
    updateCard({
      ...card,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  return (
    <form>
      <input
        ref={nameRef}
        type="text"
        name="name"
        defaultValue={name}
        onChange={onChange}
      />
      <input
        ref={companyRef}
        type="text"
        name="company"
        defaultValue={company}
      />
      <select ref={themeRef} name="theme" defaultValue={theme}>
        <option value="light">Light</option>
        <option value="dard">Dark</option>
        <option value="colorful">colorFul</option>
      </select>
      <input ref={titleRef} type="text" name="title" defaultValue={title} />
      <input type="text" name="email" defaultValue={email} />
      <textarea ref={messageRef} name="message" defaultValue={message} />
    </form>
  );
}
