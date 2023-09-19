import { createContext } from "react";
import ResponsiveContextData from "../../Types/contextData/ResponsiveContextData";

const defaultValues: ResponsiveContextData = {
  currentWidthBreakPoint: 0,
};

const ResponsiveContext = createContext<ResponsiveContextData>(defaultValues);
ResponsiveContext.displayName = "Responsive context";

export default ResponsiveContext;
