import { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Reference = styled.div`
  position: relative;
`;

const StickyHolder = styled.div<{ sticky: boolean; offset?: number }>`
  position: ${(props) => (props.sticky ? "fixed" : "absolute")};
  top: ${(props) => (props.sticky ? (props.offset || 0) + "px" : "0")};
`;

interface Props {
  offset?: number;
  children: JSX.Element;
}

const Sticky = ({ offset, children }: Props) => {
  const [sticky, setSticky] = useState(false);
  const refrenceRef = useRef<HTMLDivElement>(null);
  const [realOffset, setRealOffset] = useState<number>(0);

  useEffect(() => {
    const allFixedElements = [...document.querySelectorAll("*")].filter(
      (element) => {
        const elementRect = element.getBoundingClientRect();
        const refrenceRect = refrenceRef.current?.getBoundingClientRect();

        const isInTop =
          (elementRect.left <= refrenceRect?.right! ||
            elementRect.right >= refrenceRect?.left!) &&
          elementRect.bottom <= refrenceRect?.top!;
        if (!isInTop) {
          return false;
        }

        const positionValue = window
          .getComputedStyle(element)
          .getPropertyValue("position");
        if (positionValue === "fixed" || positionValue === "sticky") {
          return true;
        }
        return false;
      }
    );

    const itemsOffset = allFixedElements.reduce<number>(
      (acumulator, current) => acumulator + current.clientHeight,
      0
    );

    setRealOffset(itemsOffset + (offset || 0));
  }, [offset]);

  const onScroll = useCallback(() => {
    const ref = refrenceRef.current!;

    const stickyStartPos = ref.offsetTop - (realOffset || 0);

    if (ref.getBoundingClientRect().top) {
      if (!sticky && window.scrollY >= stickyStartPos) {
        setSticky(true);
      } else if (sticky && window.scrollY <= stickyStartPos) {
        setSticky(false);
      }
    }
  }, [sticky, realOffset]);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  return (
    <Reference ref={refrenceRef}>
      <StickyHolder sticky={sticky} offset={realOffset}>
        {children}
      </StickyHolder>
    </Reference>
  );
};

export default Sticky;
