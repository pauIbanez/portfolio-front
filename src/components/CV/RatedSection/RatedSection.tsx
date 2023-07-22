import styled from "styled-components";
import Colors from "../../../data/style/Colors";
import ColoredText from "../../ColoredText/ColoredText";
import parseAccents from "../../../utils/parseAccents/parseAccents";

const Holder = styled.div`
  background-color: ${Colors.backgroundGray};
  border-radius: 15px;
  padding: 15px;
  width: 100%;
  height: fit-content;
`;

const Content = styled.div`
  padding: 10px;
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

const Star = styled.img`
  height: 23px;
  width: 23px;
`;

const Text = styled.p`
  color: ${Colors.main};
`;

interface Props {
  title: string;
  notRated?: boolean;
  items: {
    name: string;
    rating?: number;
    text?: string;
  }[];
}

const RatedSection = ({ title, items, notRated }: Props) => {
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
                    <Star
                      key={i}
                      alt={`Full star ${i} out of 5`}
                      src="/media/icons/rating_star_full.svg"
                    />
                  )
                : renderStars.push(
                    <Star
                      key={i}
                      alt={`Empty star ${i} out of 5`}
                      src="/media/icons/rating_star_empty.svg"
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
    <Holder>
      <ColoredText
        textArray={[...parseAccents(title)]}
        styleData={{ size: "16px", weight: 700 }}
      />
      <Content>{renderItems}</Content>
    </Holder>
  );
};

export default RatedSection;
