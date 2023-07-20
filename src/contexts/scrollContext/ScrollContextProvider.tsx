import { useCallback, useRef } from "react";
import ScrollItem from "../../Types/ScrollItem";
import ScrollContext from "./ScrollContext.contextCreator";

interface Props {
  children: JSX.Element;
}

const ScrollContextProvider = ({ children }: Props) => {
  const scrollItems = useRef<ScrollItem[]>([]);

  const loadItem = useCallback(
    (item: ScrollItem) => {
      scrollItems.current.push(item);
    },
    [scrollItems]
  );

  const scrollToItem = useCallback(
    (name: string, offsetY?: number) => {
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
    },
    [scrollItems]
  );

  const contextValue = {
    items: scrollItems.current,
    loadItem,
    scrollToItem,
  };

  return (
    <ScrollContext.Provider value={contextValue}>
      {children}
    </ScrollContext.Provider>
  );
};

export default ScrollContextProvider;
