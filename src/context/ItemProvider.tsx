import React, { createContext, useReducer } from "react";
import ItemReducer from "./ItemReducer";
import { ItemState } from "./ItemType";
import { ItemActionType } from "./ItemActionType";

const initialState: ItemState = {
  items: ["Jus d'orande", "Miel", "Biscotte"],
  currentItem: "",
  addItem: (item: string) => {},
};

export const ItemContext = createContext<ItemState>(initialState);

const ItemProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(ItemReducer, initialState);

  const addItem = (item: string) => {
    dispatch({
      type: ItemActionType.ADD_ITEM,
      payload: item,
    });
  };

  return (
    <ItemContext.Provider
      value={{
        items: state.items,
        currentItem: state.currentItem,
        addItem,
      }}
    >
      {children}
    </ItemContext.Provider>
  );
};

export default ItemProvider;
