import styled from "styled-components";
import ProjectCardInfo from "../../../Types/ProjectCardInfo";
import Colors from "../../../data/style/Colors";

const CardHolder = styled.div`
  width: 440px;
  height: 440px;
  background-color: ${Colors.backgroundGray};
  border-radius: 15px;
  position: relative;
  overflow: hidden;
`;

const CardPresentation = styled.div`
  padding-bottom: 85px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardTitleHolder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const CardIcon = styled.img``;

const CardTitle = styled.h3`
  margin: 0;
  color: black;
  font-weight: 700;
  font-size: 35px;
`;

const CardInfo = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 85px;
  display: flex;
  flex-direction: column;
  background-color: white;
  justify-content: space-between;
  padding: 15px 25px;
`;

const CardInfoName = styled.h4`
  margin: 0;
  color: black;
  font-weight: 700;
  font-size: 16px;
`;

const CardInfoTagHolder = styled.div`
  display: flex;
  gap: 13px;
`;

const MinimizedTag = styled.img`
  width: 23px;
  height: 23px;
  border-radius: 3px;
`;

const InteractiveIcon = styled.div`
  position: absolute;
  top: 18px;
  right: 18px;
  height: 30px;
  width: 30px;
  background-color: ${Colors.disabledMain};
  color: white;
  font-size: 20px;
  display flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
`;

interface Props {
  cardInfo: ProjectCardInfo;
}

const ProjectCard = ({
  cardInfo: { name, description, image, tags, isInteractive },
}: Props) => {
  const renderTags = tags.map((tag) => (
    <MinimizedTag
      src={`./media/tags/${tag.icon}`}
      alt={tag.name}
      key={tag.name}
    />
  ));
  return (
    <CardHolder>
      <CardPresentation>
        {isInteractive && <InteractiveIcon>i</InteractiveIcon>}
        <CardTitleHolder>
          <CardIcon
            alt={`${name} logo`}
            src={`./media/${image}`}
            height={170}
            width={170}
          />
          <CardTitle>{name}</CardTitle>
        </CardTitleHolder>
      </CardPresentation>
      <CardInfo>
        <CardInfoName>{name}</CardInfoName>
        <CardInfoTagHolder>{renderTags}</CardInfoTagHolder>
      </CardInfo>
    </CardHolder>
  );
};

export default ProjectCard;
