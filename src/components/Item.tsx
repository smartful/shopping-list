import React, { useContext } from "react";
import { ReactComponent as Edit } from "../img/edit.svg";
import { ReactComponent as Delete } from "../img/delete.svg";
import { ItemContext } from "../context/ItemProvider";
import { ItemType } from "../context/ItemType";

const Item: React.FC<ItemType> = ({ id, text }) => {
  const { deleteItem, setCurrent, clearCurrent } = useContext(ItemContext);
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

  const itemElement: ItemType = {
    id,
    text,
  };

  const handleDelete = () => {
    deleteItem(id);
    clearCurrent();
  };

  return (
    <div style={itemStyle}>
      <div>{text}</div>
      <div>
        <button style={btnStyle} onClick={() => setCurrent(itemElement)}>
          <Edit />
        </button>
        <button style={btnStyle} onClick={handleDelete}>
          <Delete style={{ color: "red" }} />
        </button>
      </div>
    </div>
  );
};

export default Item;
