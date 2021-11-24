export type ItemType = {
  id: number;
  text: string;
};

export interface ItemState {
  items: ItemType[];
  currentItem: string;
  addItem: (item: ItemType) => void;
  deleteItem: (id: number) => void;
}
