import React from "react";
import Item from "./Item";

const ItemsContainer: React.FC = () => {
  const containerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    width: "30rem",
    marginBottom: "1.5rem",
  };

  return (
    <div style={containerStyle}>
      <Item text="Oeuf" />
      <Item text="Farine" />
      <Item text="Huile" />
    </div>
  );
};

export default ItemsContainer;
