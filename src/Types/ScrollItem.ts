import { RefObject } from "react";

interface ScrollItem {
  ref: RefObject<HTMLDivElement>;
  name: string;
  active?: boolean;
}

export default ScrollItem;
