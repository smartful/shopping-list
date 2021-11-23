export interface ItemState {
  items: string[];
  currentItem: string;
  addItem: (item: string) => void;
}
