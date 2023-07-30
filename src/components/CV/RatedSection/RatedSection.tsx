import styled from "styled-components";
import Colors from "../../../data/style/Colors";
import ColoredText from "../../ColoredText/ColoredText";

const Holder = styled.div<{ grow?: boolean }>`
  background-color: ${Colors.backgroundGray};
  border-radius: 15px;
  padding: 15px;
  width: 100%;
  ${(props) => (props.grow ? "flex: 1" : "height: fit-content")};
`;

const Content = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Item = styled.div<{ notRated: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  font-size: 15px;
  color: ${Colors.textGray};
`;

const RatingHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 23px;
  gap: 2px;
`;

const Text = styled.p`
  color: ${Colors.main};
`;

interface Props {
  title: string;
  notRated?: boolean;
  grow?: boolean;
  items: {
    name: string;
    rating?: number;
    text?: string;
  }[];
}

const RatedSection = ({ title, items, notRated, grow }: Props) => {
  const renderItems = items.map((item, index) => (
    <Item
      notRated={notRated || false}
      key={item.name}
      data-testid={`item-${index}`}
    >
      <p>{item.name}</p>
      {notRated ? (
        <Text>{item.text}</Text>
      ) : (
        <RatingHolder>
          {(() => {
            let renderStars: JSX.Element[] = [];

            for (let i = 0; i < 5; i++) {
              (item.rating as number) > i
                ? renderStars.push(
                    <img
                      key={i}
                      alt={`Full star ${i} out of 5`}
                      src="/media/icons/rating_star_full.svg"
                      height={23}
                      width={24}
                    />
                  )
                : renderStars.push(
                    <img
                      key={i}
                      alt={`Empty star ${i} out of 5`}
                      src="/media/icons/rating_star_empty.svg"
                      height={23}
                      width={24}
                    />
                  );
            }

            return renderStars;
          })()}
        </RatingHolder>
      )}
    </Item>
  ));

  return (
    <Holder grow={grow}>
      <ColoredText text={title} styleData={{ size: "16px", weight: 700 }} />
      <Content>{renderItems}</Content>
    </Holder>
  );
};

export default RatedSection;
