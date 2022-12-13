import React from "react";

import { Card } from "src/types/Card";

interface Props {
  card: Card;
  deleteCard: Function;
  updateCard: Function;
}

export default function CardEditForm({ card, deleteCard, updateCard }: Props) {
  const { id, name, company, theme, title, email, message, fileName, fileUrl } =
    card;

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    console.log(id);
    deleteCard(id);
  };

  const handleUpdate = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const property: string = e.target.name;
    const text: string = e.target.value;
    const updatedCard = { ...card, [property]: text };
    updateCard(updatedCard);
  };

  // const handleCardWhenFileChange = (uploaded: CloudinaryFile) => {
  //   const original_filename = uploaded.original_filename;
  //   const secure_url = uploaded.secure_url;
  //   const updatedCard = {
  //     ...card,
  //     filename: original_filename,
  //     url: secure_url,
  //   };
  //   updateCard(updatedCard);
  // };

  return (
    <form>
      <input
        type="text"
        name="name"
        defaultValue={name}
        onChange={handleUpdate}
      />
      <input
        type="text"
        name="company"
        defaultValue={company}
        onChange={handleUpdate}
      />
      <select name="theme" defaultValue={theme} onChange={handleUpdate}>
        <option value="light">light</option>
        <option value="dard">dark</option>
        <option value="colorful">colorFul</option>
      </select>
      <input
        type="text"
        name="title"
        defaultValue={title}
        onChange={handleUpdate}
      />
      <input
        type="text"
        name="email"
        defaultValue={email}
        onChange={handleUpdate}
      />
      <textarea name="message" defaultValue={message} onChange={handleUpdate} />
      <div>
        {/* <p>FileInput</p> */}
        <button name="Delete" type="button" onClick={handleDelete} />{" "}
      </div>
    </form>
  );
}
