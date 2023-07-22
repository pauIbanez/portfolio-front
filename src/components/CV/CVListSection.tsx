import styled from "styled-components";
import Colors from "../../data/style/Colors";
import { useContext, useRef, useState } from "react";
import CVListItemData from "../../Types/CVListItem";
import useEffectOnce from "../../hooks/useEffectOnce";
import CVListItem from "./CVListItem/CVListItem";
import ScrollContext from "../../contexts/scrollContext/ScrollContext.contextCreator";

const Container = styled.section`
  margin: 0 auto;
  width: 1100px;
  background-color: white;
  color: ${Colors.textGray};
  border-radius: 15px;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1), -4px -4px 10px rgba(0, 0, 0, 0.1);
`;

const ItemsHolder = styled.div`
  display: flex;
  flex-direction: column;
  gap: 70px;
  padding: 0 70px 70px 70px;
  width: 100%;
`;

const Line = styled.div<{ order: number }>`
  background-color: ${Colors.disabledMain};
  height: 2px;
`;

const Title = styled.h3`
  font-weight: 700;
  font-size: 20px;
  color: black;
  margin: 0;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px 70px 40px 70px;
`;

const Order = styled.button<{ isDateUp: boolean }>`
  display: flex;
  gap: 5px;
  border: none;
  background: none;
  font-size: 15px;
  font-family: inherit;
  color: ${Colors.main};

  cursor: pointer;

  div {
    color: ${Colors.textGray};
    display: flex;
    align-items: center;

    img {
      height: 15px;
      width: 15px;
      transition: all ease-in-out 200ms;

      ${(props) => (props.isDateUp ? "" : "transform: Rotate(180deg);")}
    }
  }
`;

interface Props {
  title: string;
  items: CVListItemData[];
}
const CVListSection = ({ title, items }: Props) => {
  const [isDateUp, setIsDateUp] = useState(true);
  const [renderItems, setRenderItems] = useState([<></>]);

  const section = useRef(null);

  const { loadItem } = useContext(ScrollContext);

  useEffectOnce(() => {
    loadItem({ name: title, ref: section });

    const allItems: JSX.Element[] = [];

    let currentIndex = 0;
    items
      .sort((a, b) =>
        Date.parse(a.dates.startDate) > Date.parse(b.dates.startDate) ? -1 : 1
      )
      .forEach((item, index) => {
        allItems.push(
          <CVListItem item={item} order={currentIndex} key={item.name} />
        );
        if (index !== items.length - 1) {
          allItems.push(
            <Line key={item.name + " Line"} order={currentIndex + 1} />
          );
        }
        currentIndex = currentIndex + 2;
      });

    setRenderItems(allItems);
  });

  const changeOrder = () => {
    setRenderItems(
      renderItems.sort((a, b) =>
        a.props.order > b.props.order
          ? !isDateUp
            ? 1
            : -1
          : !isDateUp
          ? -1
          : 1
      )
    );
    setIsDateUp(!isDateUp);
  };

  return (
    <Container ref={section}>
      <Content>
        <Title>{title}</Title>
        <Order onClick={changeOrder} isDateUp={isDateUp}>
          Order:
          <div>
            Date <img src="/media/icons/arrowUp.svg" alt="arrowUp" />
          </div>
        </Order>
      </Content>
      <ItemsHolder>{renderItems}</ItemsHolder>
    </Container>
  );
};

export default CVListSection;
