import { ItemActionType, ItemAction } from "./ItemActionType";
import { ItemState, ItemType } from "./ItemType";

const ItemReducer = (state: ItemState, action: ItemAction) => {
  switch (action.type) {
    case ItemActionType.ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case ItemActionType.DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter(
          (item: ItemType) => item.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default ItemReducer;
