import create from "zustand";
import { ItemType } from "./types/ItemType";

interface ItemState {
  items: ItemType[];
  currentItem: ItemType | null;
  addItem: (item: ItemType) => void;
  deleteItem: (id: number) => void;
  modifyItem: (item: ItemType) => void;
  setCurrent: (item: ItemType) => void;
  clearCurrent: () => void;
  clearAll: () => void;
}

export const useStore = create<ItemState>((set) => ({
  items: [],
  currentItem: null,
  addItem: (newItem: ItemType) =>
    set((state) => ({
      items: [...state.items, newItem],
    })),
  deleteItem: (id: number) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    })),
  modifyItem: (modifiedItem: ItemType) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.id === modifiedItem.id ? modifiedItem : item
      ),
    })),
  setCurrent: (item: ItemType) => set({ currentItem: item }),
  clearCurrent: () => set({ currentItem: null }),
  clearAll: () => set({ items: [] }),
}));
