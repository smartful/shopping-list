import React from "react";

const ClearBtn: React.FC = () => {
  const btnStyle: React.CSSProperties = {
    color: "red",
    backgroundColor: "transparent",
    borderColor: "transparent",
    cursor: "pointer",
    marginBottom: "2rem",
  };

  return <button style={btnStyle}>Tout supprimer</button>;
};

export default ClearBtn;
