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
    case ItemActionType.MODIFY_ITEM:
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
      };
    case ItemActionType.SET_CURRENT:
      return {
        ...state,
        currentItem: action.payload,
      };
    case ItemActionType.CLEAR_ALL:
      return {
        ...state,
        items: [],
        currentItem: null,
      };
    default:
      return state;
  }
};

export default ItemReducer;
