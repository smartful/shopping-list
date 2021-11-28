import React from "react";
import { useStore } from "../store";

const ClearBtn: React.FC = () => {
  const btnStyle: React.CSSProperties = {
    color: "red",
    backgroundColor: "transparent",
    borderColor: "transparent",
    cursor: "pointer",
    marginBottom: "2rem",
  };

  const clearAll = useStore((state) => state.clearAll);

  return (
    <button style={btnStyle} onClick={clearAll}>
      Tout supprimer
    </button>
  );
};

export default ClearBtn;
