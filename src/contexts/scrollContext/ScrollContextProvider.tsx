import { useCallback, useState } from "react";
import ScrollItem from "../../Types/ScrollItem";
import ScrollContext from "./ScrollContext.contextCreator";

interface Props {
  children: JSX.Element;
}

const ScrollContextProvider = ({ children }: Props) => {
  const [scrollItems, setScrollItems] = useState<ScrollItem[]>([]);

  const loadItem = useCallback(
    (item: ScrollItem) => {
      setScrollItems([...scrollItems, item]);
    },
    [scrollItems]
  );

  const scrollToItem = useCallback(
    (name: string, offsetY?: number, timeInMs?: number) => {
      const foundRef = scrollItems.find((item) => item.name === name)?.ref;

      if (!foundRef) {
        console.log("Ref not found: " + name);
        return;
      }
      // foundRef.ref.current?.scrollIntoView({
      //   behavior: "smooth",
      // });
      console.log("here");
      const rect = foundRef.current?.getBoundingClientRect();
      window.scrollTo(0, (rect?.top || 0) - 100);
    },
    [scrollItems]
  );

  const contextValue = {
    items: scrollItems,
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
