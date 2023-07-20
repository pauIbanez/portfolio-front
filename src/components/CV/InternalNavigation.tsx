import styled from "styled-components";
import Colors from "../../data/style/Colors";
import { useCallback, useContext, useEffect, useRef, useState } from "react";
import ScrollContext from "../../contexts/scrollContext/ScrollContext.contextCreator";

const offset = 105;

const Reference = styled.div`
  position: relative;
`;

const Holder = styled.div<{ sticky: boolean }>`
  background-color: white;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1), -4px -4px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  border-radius: 15px;

  display: flex;
  flex-direction: column;

  width: 165px;

  position: ${(props) => (props.sticky ? "fixed" : "absolute")};
  top: ${(props) => (props.sticky ? offset + "px" : "0")};
  // top: 0;
`;

const Item = styled.button<{ $active: boolean }>`
  border: none;
  background: none;

  width: 100%;
  height: 50px;

  color: ${Colors.textGray};

  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) =>
    props.$active
      ? "background-color: " +
        Colors.disabledMain +
        "; color: " +
        Colors.disabledTextGray
      : ""}

  &:hover {
    background-color: ${Colors.disabledMain};
    color: white;
  }
`;

interface Props {
  items: {
    name: string;
    active: boolean;
  }[];
}

const InternalNavigation = ({ items }: Props) => {
  const { scrollToItem } = useContext(ScrollContext);
  const [sticky, setSticky] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const onScroll = useCallback(() => {
    if (ref.current?.getBoundingClientRect().top) {
      if (!sticky && ref.current?.getBoundingClientRect().top <= offset) {
        setSticky(true);
      } else if (sticky && ref.current?.getBoundingClientRect().top >= offset) {
        setSticky(false);
      }
    }
  }, [sticky]);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  const renderItems = items.map((item) => (
    <Item
      key={item.name}
      onClick={() => {
        scrollToItem(item.name);
      }}
      $active={item.active}
    >
      {item.name}
    </Item>
  ));
  return (
    <Reference ref={ref}>
      <Holder sticky={sticky}>{renderItems}</Holder>
    </Reference>
  );
};

export default InternalNavigation;
