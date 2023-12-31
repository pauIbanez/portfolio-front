import styled from "styled-components";
import Colors from "../../../data/style/Colors";
import { useContext, useEffect, useState } from "react";
import ScrollContext from "../../../contexts/scrollContext/ScrollContext.contextCreator";
import Stickyy from "react-stickyy";

const Holder = styled.div`
  background-color: white;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1), -4px -4px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  border-radius: 15px;

  display: flex;
  flex-direction: column;

  width: 165px;
`;

const Item = styled.button<{ $active: boolean }>`
  border: none;
  background: none;
  font-family: inherit;

  width: 100%;
  height: 50px;

  color: ${Colors.textGray};

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  background-color: ${(props) =>
    props.$active ? Colors.disabledMain : "white"};

  &:hover {
    background-color: ${Colors.disabledMain};
    color: white;
  }
`;

const InternalNavigation = () => {
  const { scrollToItem, items, currentActive } = useContext(ScrollContext);
  const [renderItems, setRenderItems] = useState<React.JSX.Element[]>([]);

  useEffect(() => {
    setRenderItems(
      items.map((item) => (
        <Item
          key={item.name}
          onClick={() => {
            scrollToItem(item.name);
          }}
          $active={item.name === currentActive}
        >
          {item.name}
        </Item>
      ))
    );
  }, [currentActive, items, scrollToItem]);

  return (
    <Stickyy offset={30}>
      <Holder>{renderItems}</Holder>
    </Stickyy>
  );
};

export default InternalNavigation;
