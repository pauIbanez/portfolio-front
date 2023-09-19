import { useMediaQuery } from "react-responsive";
import ResponsiveContextData from "../../Types/contextData/ResponsiveContextData";
import ResponsiveContext from "./ResponsiveContext.contextCreator";
import { useCallback, useState } from "react";

interface Props {
  children: JSX.Element;
}

const ResponsiveContextProvider = ({ children }: Props) => {
  const [currentWidthBreakPoint, setCurrentWidthBreakPoint] =
    useState<number>(0);

  const handleWidthChange = useCallback(
    (screenWidths: boolean[]) => {
      const renderBreakpoint = screenWidths.findIndex((query) => query);
      if (currentWidthBreakPoint !== renderBreakpoint) {
        setCurrentWidthBreakPoint(renderBreakpoint);
      }
    },
    [currentWidthBreakPoint]
  );

  const screenWidths = [
    useMediaQuery({ minWidth: 1920 }, undefined, () => {
      handleWidthChange(screenWidths);
    }),
    useMediaQuery({ minWidth: 1536 }, undefined, () => {
      handleWidthChange(screenWidths);
    }),
    useMediaQuery({ minWidth: 1366 }, undefined, () => {
      handleWidthChange(screenWidths);
    }),
    useMediaQuery({ minWidth: 414 }, undefined, () => {
      handleWidthChange(screenWidths);
    }),
    useMediaQuery({ minWidth: 360 }, undefined, () => {
      handleWidthChange(screenWidths);
    }),
    useMediaQuery({ minWidth: 10 }, undefined, () => {
      handleWidthChange(screenWidths);
    }),
  ];

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
