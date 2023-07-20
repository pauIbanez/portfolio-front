import styled from "styled-components";
import Colors from "../../data/style/Colors";
import { useContext } from "react";
import ScrollContext from "../../contexts/scrollContext/ScrollContext.contextCreator";

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
  return <Holder>{renderItems}</Holder>;
};

export default InternalNavigation;
