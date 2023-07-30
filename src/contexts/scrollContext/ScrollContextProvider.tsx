import { useCallback, useEffect, useRef, useState } from "react";
import ScrollItem from "../../Types/ScrollItem";
import ScrollContext from "./ScrollContext.contextCreator";
import ScrollContextData from "../../Types/contextData/ScrollContextData";

interface Props {
  children: JSX.Element;
}

const ScrollContextProvider = ({ children }: Props) => {
  const scrollItems = useRef<ScrollItem[]>([]);
  const [currentActive, setCurrentActive] = useState<string>("");

  const loadItem = (item: ScrollItem) => {
    scrollItems.current.push(item);
  };

  const scrollToItem = (name: string, offsetY?: number) => {
    const foundItem = scrollItems.current.find((item) => item.name === name);

    if (!foundItem) {
      console.log("Ref not found: " + name);
      return;
    }
    const rect = foundItem.ref.current?.getBoundingClientRect();
    window.scrollTo({
      top: (rect?.top || 0) + window.scrollY - (offsetY || 100),
      behavior: "smooth",
    });
  };

  const onScroll = useCallback(() => {
    let closestItem: string = "";
    let closestItemHeight: number = 0;

    scrollItems.current.forEach((item) => {
      const visible =
        window.innerHeight -
        Math.abs(item.ref.current?.getBoundingClientRect().y || 0);

      if (visible > closestItemHeight) {
        closestItemHeight = visible;
        closestItem = item.name;
      }
    });

    setCurrentActive(closestItem);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  const getItems = (): ScrollItem[] => scrollItems.current;

  const contextValue: ScrollContextData = {
    items: scrollItems.current,
    loadItem,
    scrollToItem,
    getItems,
    currentActive,
  };

  return (
    <ScrollContext.Provider value={contextValue}>
      {children}
    </ScrollContext.Provider>
  );
};

export default ScrollContextProvider;
