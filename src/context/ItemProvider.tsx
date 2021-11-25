import React, { createContext, useReducer } from "react";
import ItemReducer from "./ItemReducer";
import { ItemState, ItemType } from "./ItemType";
import { ItemActionType } from "./ItemActionType";

const initialState: ItemState = {
  items: [
    {
      id: 1,
      text: "Jus d'orange",
    },
    {
      id: 2,
      text: "Miel",
    },
    {
      id: 3,
      text: "Biscotte",
    },
  ],
  currentItem: null,
  addItem: (item: ItemType) => {},
  deleteItem: (id: number) => {},
  modifyItem: (item: ItemType) => {},
  setCurrent: (item: ItemType) => {},
  clearCurrent: () => {},
};

export const ItemContext = createContext<ItemState>(initialState);

const ItemProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(ItemReducer, initialState);

  const addItem = (item: ItemType) => {
    dispatch({
      type: ItemActionType.ADD_ITEM,
      payload: item,
    });
  };

  const deleteItem = (id: number) => {
    dispatch({
      type: ItemActionType.DELETE_ITEM,
      payload: id,
    });
  };

  const modifyItem = (item: ItemType) => {
    dispatch({
      type: ItemActionType.MODIFY_ITEM,
      payload: item,
    });
  };

  const setCurrent = (item: ItemType) => {
    dispatch({
      type: ItemActionType.SET_CURRENT,
      payload: item,
    });
  };

  const clearCurrent = () => {
    dispatch({
      type: ItemActionType.CLEAR_CURRENT,
      payload: null,
    });
  };

  return (
    <ItemContext.Provider
      value={{
        items: state.items,
        currentItem: state.currentItem,
        addItem,
        deleteItem,
        modifyItem,
        setCurrent,
        clearCurrent,
      }}
    >
      {children}
    </ItemContext.Provider>
  );
};

export default ItemProvider;
