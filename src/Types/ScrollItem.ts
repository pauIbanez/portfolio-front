import { RefObject } from "react";

interface ScrollItem {
  ref: RefObject<HTMLDivElement>;
  name: string;
}

export default ScrollItem;
