import React, { createContext, useReducer } from "react";
import ItemReducer from "./ItemReducer";
import { ItemState } from "./ItemType";

const initialState: ItemState = {
  items: ["Jus d'orande", "Miel", "Biscotte"],
  currentItem: "",
};

export const ItemContext = createContext<ItemState>(initialState);

const ItemProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(ItemReducer, initialState);

  return (
    <ItemContext.Provider
      value={{
        items: state.items,
        currentItem: state.currentItem,
      }}
    >
      {children}
    </ItemContext.Provider>
  );
};

export default ItemProvider;
