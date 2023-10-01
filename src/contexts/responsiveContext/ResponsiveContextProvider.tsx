import { useMediaQuery } from "react-responsive";
import ResponsiveContextData from "../../Types/contextData/ResponsiveContextData";
import ResponsiveContext from "./ResponsiveContext.contextCreator";
import React, { useCallback, useState } from "react";
import useEffectOnce from "../../hooks/useEffectOnce";

interface Props {
  children: React.JSX.Element;
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
    useMediaQuery({ maxWidth: 1920, minWidth: 1536 }, undefined, () => {
      handleWidthChange(screenWidths);
    }),
    useMediaQuery({ maxWidth: 1536, minWidth: 1366 }, undefined, () => {
      handleWidthChange(screenWidths);
    }),
    useMediaQuery({ maxWidth: 1366, minWidth: 1024 }, undefined, () => {
      handleWidthChange(screenWidths);
    }),
    useMediaQuery({ maxWidth: 1024 }, undefined, () => {
      handleWidthChange(screenWidths);
    }),
  ];

  useEffectOnce(() => {
    handleWidthChange(screenWidths);
  });

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
