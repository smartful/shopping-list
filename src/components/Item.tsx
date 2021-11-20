import React from "react";
import { ReactComponent as Edit } from "../img/edit.svg";
import { ReactComponent as Delete } from "../img/delete.svg";

export interface IItem {
  text: string;
}

const Item: React.FC<IItem> = ({ text }) => {
  const itemStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: "1rem",
    fontSize: "1.2rem",
  };

  const btnStyle: React.CSSProperties = {
    backgroundColor: "transparent",
    borderColor: "transparent",
    cursor: "pointer",
  };

  return (
    <div style={itemStyle}>
      <div>{text}</div>
      <div>
        <button style={btnStyle}>
          <Edit />
        </button>
        <button style={btnStyle}>
          <Delete style={{ color: "red" }} />
        </button>
      </div>
    </div>
  );
};

export default Item;
