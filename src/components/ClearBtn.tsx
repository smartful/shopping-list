import React, { useContext } from "react";
import { ItemContext } from "../context/ItemProvider";

const ClearBtn: React.FC = () => {
  const { clearAll } = useContext(ItemContext);
  const btnStyle: React.CSSProperties = {
    color: "red",
    backgroundColor: "transparent",
    borderColor: "transparent",
    cursor: "pointer",
    marginBottom: "2rem",
  };

  return (
    <button style={btnStyle} onClick={clearAll}>
      Tout supprimer
    </button>
  );
};

export default ClearBtn;
