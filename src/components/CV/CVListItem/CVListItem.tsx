import styled from "styled-components";
import CVListItemData from "../../../Types/CVListItem";
import Colors from "../../../data/style/Colors";
import { textSizes } from "../../../data/Pages/responsive/cvPage";
import ResponsiveContext from "../../../contexts/responsiveContext/ResponsiveContext.contextCreator";
import { useContext } from "react";
interface Props {
  item: CVListItemData;
  order: number;
}

const Holder = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  p,
  h4,
  h5 {
    margin: 0;
    color: ${Colors.textGray};
  }
`;

const InfoSection = styled.div`
  display: flex;
`;

const Icon = styled.img`
  height: 70px;
  width: 70px;

  border-radius: 15px;
  object-fit: contain;
`;

const InfoItems = styled.div<{ $size: number }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 70px;
  margin-left: 15px;
  font-size: ${(props) => props.$size}px;

  h4 {
    font-size: ${(props) => props.$size + 3}px;
  }
`;

const NameSection = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Name = styled.h4`
  font-weight: 700;
`;

const Location = styled.p``;

const Concept = styled.p``;

const DateRange = styled.p`
  color: ${Colors.lightTextGray} !important;
`;

const TextSection = styled.div<{ $size: number }>`
  display: flex;
  flex-direction: column;
  gap: 15px;
  font-size: ${(props) => props.$size}px;

  h5 {
    font-size: ${(props) => props.$size}px;
  }
`;

const TextTitle = styled.h5`
  font-weight: 700;
  margin-bottom: 5px !important;
`;
const TextContent = styled.p``;

const CVListItem = ({ item }: Props) => {
  const { currentWidthBreakPoint } = useContext(ResponsiveContext);

  const renderTexts = item.textSections.map((section) => (
    <div key={section.title}>
      <TextTitle>{section.title}</TextTitle>
      <TextContent>{section.text}</TextContent>
    </div>
  ));

  return (
    <Holder>
      <InfoSection>
        <Icon alt={`${item.name} logo`} src={`/media/logos/${item.image}`} />
        <InfoItems $size={textSizes[currentWidthBreakPoint].texts}>
          <NameSection>
            <Name>{item.name}</Name>
            <Location>-</Location>
            <Location>{item.location}</Location>
          </NameSection>
          <Concept>{item.concept}</Concept>
          <DateRange>{`${item.dates.startDate} - ${item.dates.endDate}`}</DateRange>
        </InfoItems>
      </InfoSection>
      <TextSection $size={textSizes[currentWidthBreakPoint].texts}>
        {renderTexts}
      </TextSection>
    </Holder>
  );
};

export default CVListItem;
