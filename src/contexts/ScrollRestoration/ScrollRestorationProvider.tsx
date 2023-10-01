import { useLocation } from "react-router-dom";
import ScrollRestorationData from "../../Types/contextData/ScrollRestorationData";
import ScrollRestorationContext from "./ScrollRestoration.contextCreator";
import React, { useRef, useEffect, useMemo } from "react";

interface Props {
  children: React.JSX.Element;
}

const ScrollRestorationProvider = ({ children }: Props) => {
  const { pathname } = useLocation();
  const scrollToMain = useRef<boolean>(false);

  const setScrollToMain = () => {
    scrollToMain.current = true;
  };

  useEffect(() => {
    if (!scrollToMain.current) {
      window.scrollTo(0, 0);
    }
    scrollToMain.current = false;
  }, [pathname]);

  const contextValue: ScrollRestorationData = useMemo(
    () => ({
      scrollToMain: scrollToMain.current,
      setScrollToMain,
    }),
    []
  );

  return (
    <ScrollRestorationContext.Provider value={contextValue}>
      {children}
    </ScrollRestorationContext.Provider>
  );
};

export default ScrollRestorationProvider;
