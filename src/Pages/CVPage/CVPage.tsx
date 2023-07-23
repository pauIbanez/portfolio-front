import { useRef } from "react";
import ScrollContextProvider from "../../contexts/scrollContext/ScrollContextProvider";

const CVPage = () => {
  const cvRef = useRef<HTMLDivElement>(null);

  return (
    <ScrollContextProvider>
      <p>hello</p>
    </ScrollContextProvider>
  );
};

export default CVPage;
