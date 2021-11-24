import React, { useState, useContext } from "react";
import { ItemContext } from "../context/ItemProvider";
import { ItemType } from "../context/ItemType";

const Form: React.FC = () => {
  const [item, setItem] = useState<string>("");
  const { addItem } = useContext(ItemContext);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newItem: ItemType = {
      id: Date.now(),
      text: item,
    };
    addItem(newItem);
  };

  const inputStyle: React.CSSProperties = {
    marginBottom: "2rem",
    width: "30rem",
    backgroundColor: "whitesmoke",
    padding: "0.8rem",
    fontSize: "1.5rem",
  };

  const buttonStyle: React.CSSProperties = {
    color: "white",
    backgroundColor: "#8888CC",
    borderTopRightRadius: "0.5rem",
    borderBottomRightRadius: "0.5rem",
    padding: "0.8rem",
    fontSize: "1.5rem",
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        style={inputStyle}
        value={item}
        placeholder="Ex : Jus d'orange"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setItem(e.target.value)
        }
      />
      <button type="submit" style={buttonStyle}>
        Submit
      </button>
    </form>
  );
};

export default Form;
