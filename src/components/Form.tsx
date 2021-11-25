import React, { useState, useEffect, useContext } from "react";
import { ItemContext } from "../context/ItemProvider";
import { ItemType } from "../context/ItemType";

const Form: React.FC = () => {
  const initialItem: ItemType = {
    id: 0,
    text: "",
  };
  const [item, setItem] = useState<ItemType>(initialItem);
  const { text } = item;
  const { currentItem, addItem, modifyItem, clearCurrent } =
    useContext(ItemContext);

  useEffect(() => {
    if (currentItem !== null) {
      setItem(currentItem);
    } else {
      setItem(initialItem);
    }
  }, [currentItem]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (currentItem === null) {
      const newItem: ItemType = {
        id: Date.now(),
        text: item.text,
      };
      addItem(newItem);
    } else {
      modifyItem(item);
    }

    setItem(initialItem);
    clearCurrent();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setItem({ ...item, text: e.target.value });
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
        value={text}
        placeholder="Ex : Jus d'orange"
        onChange={handleChange}
      />
      <button type="submit" style={buttonStyle}>
        Submit
      </button>
    </form>
  );
};

export default Form;
