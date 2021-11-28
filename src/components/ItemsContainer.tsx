import React from "react";
import Item from "./Item";
import { useStore } from "../store";

const ItemsContainer: React.FC = () => {
  const containerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    width: "30rem",
    marginBottom: "1.5rem",
  };

  const items = useStore((state) => state.items);

  return (
    <div style={containerStyle}>
      {items.map((item) => (
        <Item key={item.id} text={item.text} id={item.id} />
      ))}
    </div>
  );
};

export default ItemsContainer;
