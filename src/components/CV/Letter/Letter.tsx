import styled from "styled-components";
import Colors from "../../../data/style/Colors";

interface Props {
  item: {
    name: string;
    position: string;
    email: string;
    linkedIn: string;
    picture: string;
    letter: string;
  };
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
  height: 100px;
  width: 100px;

  border-radius: 15px;
  object-fit: contain;
`;

const InfoItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100px;
  margin-left: 15px;
`;

const Name = styled.h4`
  font-size: 18px;
  font-weight: 700;
`;

const InfoText = styled.p`
  font-size: 14px;
  color: ${Colors.lightTextGray};
`;

const TextContent = styled.p`
  white-space: pre-line;
  font-size: 14px;
`;

const Letter = ({
  item: { email, name, linkedIn, position, picture, letter },
}: Props) => {
  return (
    <Holder>
      <InfoSection>
        <Icon alt={name} src={`/media/references/${picture}`} />
        <InfoItems>
          <Name>{name}</Name>
          <InfoText>{position}</InfoText>
          <InfoText>{email}</InfoText>
          <InfoText>{linkedIn}</InfoText>
        </InfoItems>
      </InfoSection>
      <TextContent>{letter}</TextContent>
    </Holder>
  );
};

export default Letter;
