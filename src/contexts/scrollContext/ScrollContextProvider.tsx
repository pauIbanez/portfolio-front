import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  RefObject,
} from "react";
import ScrollItem from "../../Types/ScrollItem";
import ScrollContext from "./ScrollContext.contextCreator";
import ScrollContextData from "../../Types/contextData/ScrollContextData";

interface Props {
  children: React.JSX.Element;
}

const ScrollContextProvider = ({ children }: Props) => {
  const scrollItems = useRef<ScrollItem[]>([]);
  const [currentActive, setCurrentActive] = useState<string>("");
  const [isAutoScrolling, setIsAutoScrolling] = useState<boolean>(false);
  const [storedItems, setStoredItems] = useState<ScrollItem[]>([]);

  const loadItem = (item: ScrollItem) => {
    scrollItems.current.push(item);
    setStoredItems((prevStoredItems) => [...prevStoredItems, item]);
  };

  const updateItem = (itemRef: RefObject<HTMLDivElement>, itemName: string) => {
    scrollItems.current.map((item) => {
      if (item.ref === itemRef) {
        item.name = itemName;
      }
      return item;
    });

    setStoredItems((prevStoredItems) =>
      prevStoredItems.map((item) => {
        if (item.ref === itemRef) {
          item.name = itemName;
        }
        return item;
      })
    );
  };

  const scrollToItem = (name: string, offsetY?: number) => {
    const foundItem = scrollItems.current.find((item) => item.name === name);

    if (!foundItem) {
      console.log("Ref not found: " + name);
      return;
    }
    setIsAutoScrolling(true);
    setCurrentActive(name);
    const rect = foundItem.ref.current?.getBoundingClientRect();
    window.scrollTo({
      top: (rect?.top ?? 0) + window.scrollY - (offsetY ?? 100),
      behavior: "smooth",
    });
  };

  const onScroll = useCallback(() => {
    if (isAutoScrolling) {
      return;
    }

    let closestItem: string = "";
    let closestItemHeight: number = 0;

    scrollItems.current.forEach((item) => {
      const visible =
        window.innerHeight -
        Math.abs(item.ref.current?.getBoundingClientRect().y ?? 0);

      if (visible > closestItemHeight) {
        closestItemHeight = visible;
        closestItem = item.name;
      }
    });

    setCurrentActive(closestItem);
  }, [isAutoScrolling]);

  const onScrollEnd = useCallback(() => {
    if (isAutoScrolling) {
      setIsAutoScrolling(false);
    }
  }, [isAutoScrolling]);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  useEffect(() => {
    window.addEventListener("scrollend", onScrollEnd);

    return () => window.removeEventListener("scrollend", onScrollEnd);
  }, [onScrollEnd]);

  //#region Preventing scroll

  const preventScroll = useCallback(
    (event: any) => {
      if (isAutoScrolling) {
        event.preventDefault();
        event.stopPropagation();
      }
    },
    [isAutoScrolling]
  );

  useEffect(() => {
    window.addEventListener("wheel", preventScroll, { passive: false });

    return () => window.removeEventListener("wheel", preventScroll);
  }, [preventScroll]);

  //#endregion

  const getItems = (): ScrollItem[] => scrollItems.current;

  const contextValue: ScrollContextData = useMemo(
    () => ({
      items: storedItems,
      loadItem,
      scrollToItem,
      getItems,
      updateItem,
      currentActive,
    }),
    [currentActive, storedItems]
  );

  return (
    <ScrollContext.Provider value={contextValue}>
      {children}
    </ScrollContext.Provider>
  );
};

export default ScrollContextProvider;
