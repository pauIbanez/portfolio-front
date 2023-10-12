import { createContext } from "react";
import ScrollContextData from "../../Types/contextData/ScrollContextData";

const defaultValues: ScrollContextData = {
  items: [],
  loadItem: () => null,
  scrollToItem: () => null,
  getItems: () => [],
  updateItem: () => null,
  currentActive: "",
};

const ScrollContext = createContext<ScrollContextData>(defaultValues);
ScrollContext.displayName = "Scroll context";

export default ScrollContext;
