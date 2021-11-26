export type ItemType = {
  id: number;
  text: string;
};

export interface ItemState {
  items: ItemType[];
  currentItem: ItemType | null;
  addItem: (item: ItemType) => void;
  deleteItem: (id: number) => void;
  modifyItem: (item: ItemType) => void;
  setCurrent: (item: ItemType) => void;
  clearCurrent: () => void;
  clearAll: () => void;
}
