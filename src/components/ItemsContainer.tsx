import React, { useContext } from "react";
import { ItemContext } from "../context/ItemProvider";
import Item from "./Item";

const ItemsContainer: React.FC = () => {
  const { items } = useContext(ItemContext);
  const containerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    width: "30rem",
    marginBottom: "1.5rem",
  };

  return (
    <div style={containerStyle}>
      {items.map((item) => (
        <Item key={item.id} text={item.text} id={item.id} />
      ))}
    </div>
  );
};

export default ItemsContainer;
