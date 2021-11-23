import { ItemActionType, ItemAction } from "./ItemActionType";
import { ItemState } from "./ItemType";

const ItemReducer = (state: ItemState, action: ItemAction) => {
  const items = state.items;

  switch (action.type) {
    case ItemActionType.ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    default:
      return state;
  }
};

export default ItemReducer;
