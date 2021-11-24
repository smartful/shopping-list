export enum ItemActionType {
  ADD_ITEM = "ADD_ITEM",
  DELETE_ITEM = "DELETE_ITEM",
  MODIFY_ITEM = "MODIFY_ITEM",
}

export interface ItemAction {
  type: ItemActionType;
  payload: any;
}
