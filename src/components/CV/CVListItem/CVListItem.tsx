import styled from "styled-components";
import CVListItemData from "../../../Types/CVListItem";
import Colors from "../../../data/style/Colors";

interface Props {
  item: CVListItemData;
  order: number;
}

const Holder = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

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
  height: 80px;
  width: 80px;

  border-radius: 15px;
  object-fit: contain;
`;

const InfoItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space between;
  height: 80px;
  margin-left: 15px;
`;

const NameSection = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Name = styled.h4`
  font-size: 20px;
  font-weight: 700;
`;

const Location = styled.p`
  font-size: 15px;
`;

const Concept = styled.p`
  font-size: 15px;
`;

const Date = styled.p`
  font-size: 15px;
  color: ${Colors.lightTextGray} !important;
`;

const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const TextTitle = styled.h5`
  font-size: 15px;
  font-weight: 700;
`;
const TextContent = styled.p`
  font-size: 15px;
`;

const CVListItem = ({ item }: Props) => {
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
        <InfoItems>
          <NameSection>
            <Name>{item.name}</Name>
            <Location>-</Location>
            <Location>{item.location}</Location>
          </NameSection>
          <Concept>{item.concept}</Concept>
          <Date>{`${item.dates.startDate} - ${item.dates.endDate}`}</Date>
        </InfoItems>
      </InfoSection>
      <TextSection>{renderTexts}</TextSection>
    </Holder>
  );
};

export default CVListItem;
