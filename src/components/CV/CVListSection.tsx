import styled from "styled-components";
import Colors from "../../data/style/Colors";
import { useState } from "react";
import CVListItemData from "../../Types/CVListItem";
import useEffectOnce from "../../hooks/useEffectOnce";

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

const MockItem = styled.p<{ order: number }>``;

const Title = styled.h3`
  font-weight: 700;
  font-size: 20px;
  color: black;
  padding: 40px 0 40px 70px;
  margin: 0;
`;

interface Props {
  title: string;
  items: CVListItemData[];
}
const CVListSection = ({ title, items }: Props) => {
  const [isDateUp, setIsDateUp] = useState(true);
  const [renderItems, setRenderItems] = useState([<></>]);

  useEffectOnce(() => {
    const allItems: JSX.Element[] = [];

    let currentIndex = 0;
    items
      .sort((a, b) =>
        Date.parse(a.dates.startDate) > Date.parse(b.dates.startDate) ? 1 : -1
      )
      .forEach((item, index) => {
        allItems.push(
          <MockItem order={currentIndex} key={currentIndex + item.name}>
            {item.name}
          </MockItem>
        );
        if (index !== items.length - 1) {
          allItems.push(
            <Line key={currentIndex + 1 + item.name} order={currentIndex + 1} />
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
    <Container>
      <Title>{title}</Title>
      <ItemsHolder>{renderItems}</ItemsHolder>
      <button onClick={changeOrder}>Order</button>
    </Container>
  );
};

export default CVListSection;
