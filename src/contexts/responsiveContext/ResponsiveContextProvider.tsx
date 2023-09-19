import { useMediaQuery } from "react-responsive";
import ResponsiveContextData from "../../Types/contextData/ResponsiveContextData";
import ResponsiveContext from "./responsiveContext.contextCreator";
import { useEffect, useState } from "react";

interface Props {
  children: JSX.Element;
}

const ResponsiveContextProvider = ({ children }: Props) => {
  const [currentWidthBreakPoint, setCurrentWidthBreakPoint] =
    useState<number>(0);

  const screenWidths = [
    useMediaQuery({ query: "min-width: 1536px" }),
    useMediaQuery({ query: "min-width: 1366px" }),
    useMediaQuery({ query: "min-width: 414px" }),
    useMediaQuery({ query: "min-width: 360px" }),
  ];

  const renderBreakpoint = screenWidths.findIndex((query) => query === true);

  useEffect(() => {
    if (renderBreakpoint !== currentWidthBreakPoint) {
      setCurrentWidthBreakPoint(renderBreakpoint);
    }
  }, [currentWidthBreakPoint, renderBreakpoint]);

  const contextValue: ResponsiveContextData = {
    currentWidthBreakPoint,
  };

  return (
    <ResponsiveContext.Provider value={contextValue}>
      {children}
    </ResponsiveContext.Provider>
  );
};

export default ResponsiveContextProvider;
