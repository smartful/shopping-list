import { ItemActionType, ItemAction } from "./ItemActionType";
import { ItemState } from "./ItemType";

const ItemReducer = (state: ItemState, action: ItemAction) => {
  const items = state.items;

  switch (action.type) {
    default:
      return state;
  }
};

export default ItemReducer;
