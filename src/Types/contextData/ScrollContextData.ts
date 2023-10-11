import ScrollItem from "../ScrollItem";
import { RefObject } from "react";

interface ScrollContextData {
  items: ScrollItem[];
  loadItem(item: ScrollItem): void;
  scrollToItem(name: string, offsetY?: number, timeInMs?: number): void;
  getItems(): ScrollItem[];
  updateItem: (itemRef: RefObject<HTMLDivElement>, itemName: string) => void;
  currentActive: string;
}

export default ScrollContextData;
