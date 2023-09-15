import { createContext } from "react";
import ScrollRestorationData from "../../Types/contextData/ScrollRestorationData";

const defaultValues: ScrollRestorationData = {
  scrollToMain: false,
  setScrollToMain: () => null,
};

const ScrollRestorationContext =
  createContext<ScrollRestorationData>(defaultValues);
ScrollRestorationContext.displayName = "Scroll restoration context";

export default ScrollRestorationContext;
