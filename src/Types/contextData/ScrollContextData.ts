import ScrollItem from "../ScrollItem";

interface ScrollContextData {
  items: ScrollItem[];
  loadItem(item: ScrollItem): void;
  scrollToItem(name: string, offsetY?: number, timeInMs?: number): void;
  getItems(): ScrollItem[];
  currentActive: string;
}

export default ScrollContextData;
