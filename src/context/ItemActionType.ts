export enum ItemActionType {
  ADD_ITEM = "ADD_ITEM",
  DELETE_ITEM = "DELETE_ITEM",
  MODIFY_ITEM = "MODIFY_ITEM",
  SET_CURRENT = "SET_CURRENT",
  CLEAR_CURRENT = "CLEAR_CURRENT",
  CLEAR_ALL = "CLEAR_ALL",
}

export interface ItemAction {
  type: ItemActionType;
  payload: any;
}
