import styled from "styled-components";
import Colors from "../../../data/style/Colors";
import ResponsiveContext from "../../../contexts/responsiveContext/ResponsiveContext.contextCreator";
import { useContext } from "react";
import { textSizes } from "../../../data/Pages/responsive/cvPage";
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

const Holder = styled.div<{ $size: number }>`
  display: flex;
  flex-direction: column;
  gap: 30px;
  font-size: ${(props) => props.$size}px;

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
  color: ${Colors.lightTextGray};
`;

const TextContent = styled.p`
  white-space: pre-line;
`;

const Letter = ({
  item: { email, name, linkedIn, position, picture, letter },
}: Props) => {
  const { currentWidthBreakPoint } = useContext(ResponsiveContext);
  return (
    <Holder $size={textSizes[currentWidthBreakPoint].letterSize}>
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
