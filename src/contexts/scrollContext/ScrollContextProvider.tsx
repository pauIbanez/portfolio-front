import { useRef } from "react";
import ScrollItem from "../../Types/ScrollItem";
import ScrollContext from "./ScrollContext.contextCreator";
import ScrollContextData from "../../Types/contextData/ScrollContextData";

interface Props {
  children: JSX.Element;
}

const ScrollContextProvider = ({ children }: Props) => {
  const scrollItems = useRef<ScrollItem[]>([]);

  const loadItem = (item: ScrollItem) => {
    scrollItems.current.push(item);
  };

  const scrollToItem = (name: string, offsetY?: number) => {
    const foundRef = scrollItems.current.find(
      (item) => item.name === name
    )?.ref;

    if (!foundRef) {
      console.log("Ref not found: " + name);
      return;
    }
    const rect = foundRef.current?.getBoundingClientRect();
    window.scrollTo({
      top: (rect?.top || 0) + window.scrollY - (offsetY || 100),
      behavior: "smooth",
    });
  };

  const getItems = (): ScrollItem[] => scrollItems.current;

  const contextValue: ScrollContextData = {
    items: scrollItems.current,
    loadItem,
    scrollToItem,
    getItems,
  };

  return (
    <ScrollContext.Provider value={contextValue}>
      {children}
    </ScrollContext.Provider>
  );
};

export default ScrollContextProvider;
