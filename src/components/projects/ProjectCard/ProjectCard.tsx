import { useState } from "react";
import styled from "styled-components";
import ProjectCardInfo, { ProjectTag } from "../../../Types/ProjectCardInfo";
import Colors from "../../../data/style/Colors";
import { projectTagData } from "../../../data/projects/Projects";

interface HoverProp {
  isHovering: boolean;
}

const CardHolder = styled.div<{
  backgroundColor?: string;
  backgroundImage?: string;
}>`
  width: 440px;
  height: 300px;

  background-color: ${(props) =>
    props.backgroundColor ?? Colors.backgroundGray};

  ${(props) =>
    props.backgroundImage
      ? 'background-image: url("./media/projects/' +
        props.backgroundImage +
        '");'
      : ""}

  border-radius: 15px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1), -4px -4px 10px rgba(0, 0, 0, 0.1);
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

const CardTitle = styled.h3<{ color?: string }>`
  margin: 0;
  color: ${(props) => props.color ?? "black"};
  font-weight: 700;
  font-size: 35px;
`;

const CardInfo = styled.div<HoverProp>`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  transform: translateY(${(props) => (props.isHovering ? "0" : "300px")});
  height: 385px;
  background-color: rgba(255, 255, 255, 0.85);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all ease-in-out 0.2s;
`;

const MinimizedCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  height: 85px;
  padding: 0 25px;
`;

const CardInfoName = styled.h4`
  margin: 0;
  color: black;
  font-weight: 700;
  font-size: 16px;
  transition: all ease-in-out 0.1s;
`;

const CardInfoTagHolder = styled.div<{ isCentered: boolean }>`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: ${(props) => (props.isCentered ? "center" : "flex-start")};
`;

const MinimizedTag = styled.img`
  width: 23px;
  height: 23px;
  border-radius: 3px;
`;

const MaximizedCardInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 40px 50px 20px 50px;
`;

const MaximizedCardTitleHolder = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const MaximizedCardIcon = styled.img`
  border-radius: 8px;
`;

const MaximizedCardTitle = styled.h5`
  margin: 0;
  color: black;
  font-weight: 700;
  font-size: 25px;
`;

const Desctiption = styled.p`
  font-size: 14px;
`;

const CardClickInfo = styled.p`
  font-weight: 700;
  font-size: 14px;
  margin: 0;
`;

const MaximazableTag = styled.div<{ tag: ProjectTag; isHovering: boolean }>`
  width: 60px;
  height: 25px;
  font-size: 10px;
  font-weight: 600;

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  overflow: ${(props) => (props.isHovering ? "hidden" : "")};

  div {
    height: ${(props) => (props.isHovering ? "100%" : "20px")};
    color: ${(props) => props.tag.color};
    background-color: ${(props) => props.tag.backgroundColor};
    width: ${(props) => (props.isHovering ? "100%" : "20px")};
    overflow: hidden;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: ${(props) =>
      props.isHovering ? "all 0.2s ease-in 0.7s" : "all 0.1s ease-in"};
  }
  img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    opacity: ${(props) => (props.isHovering ? "0" : "1")};
    transition: ${(props) =>
      props.isHovering ? "all 0.1s ease-in 0.7s" : "all 0.1s ease-in"};
  }
`;

const InteractiveIcon = styled.div<HoverProp>`
  position: absolute;
  top: 18px;
  right: 18px;
  height: 20px;
  width: ${(props) => (props.isHovering ? "75px" : "20px")};
  background-color: ${(props) =>
    props.isHovering ? Colors.main : Colors.disabledMain};
  color: white;

  border-radius: 30px;
  z-index: 10;
  font-size: 10px;
  display: flex;
  justify-content: center;
  align-items: cetner;
  transition: all ease-in-out 0.1s;
`;

const InteractiveText = styled.p<HoverProp>`
  display flex;
  align-items: center;
  // justify-content: center;
  overflow: hidden;
  height: 100%;
  margin: 0;


  &::after {
    content: "${(props) => (props.isHovering ? "nteractive" : "")}";
    width: ${(props) => (props.isHovering ? "100%" : "0px")};
    overflow: hidden;
    transition: ${(props) =>
      props.isHovering ? "all 0.2s ease-in 0.35s" : "all 0.1s ease-in"};
  }
`;

interface Props {
  cardInfo: ProjectCardInfo;
  onClick: () => void;
}

const ProjectCard = ({
  cardInfo: {
    name,
    nameColor,
    description,
    logo,
    backgroundImage,
    backgroundColor,
    tags,
    isInteractive,
  },
  onClick,
}: Props) => {
  const [isHovering, setIsHovering] = useState<boolean>(false);

  const renderTags = tags.map((tag, index) => {
    const tagData: ProjectTag = projectTagData[tag];

    return (
      <MinimizedTag
        src={`./media/tags/${tagData.icon}`}
        alt={tagData.name}
        key={tagData.name + "-" + index}
      />
    );
  });

  const renderMaximazibleTags = tags.map((tag, index) => {
    const tagData: ProjectTag = projectTagData[tag];

    return (
      <MaximazableTag
        tag={tagData}
        key={tagData.name + "-" + index}
        isHovering={isHovering}
      >
        <MinimizedTag src={`./media/tags/${tagData.icon}`} alt={tagData.name} />
        <div>{tagData.name}</div>
      </MaximazableTag>
    );
  });

  return (
    <CardHolder
      onMouseEnter={() => {
        setIsHovering(true);
      }}
      onMouseLeave={() => setIsHovering(false)}
      onClick={onClick}
      backgroundImage={backgroundImage}
      backgroundColor={backgroundColor}
      data-testid="project-card"
    >
      <CardPresentation>
        {isInteractive && (
          <InteractiveIcon isHovering={isHovering}>
            <InteractiveText isHovering={isHovering}>i</InteractiveText>
          </InteractiveIcon>
        )}
        <CardTitleHolder>
          <CardIcon
            alt={`${name} logo`}
            src={`./media/logos/${logo}`}
            height={100}
            width={100}
          />
          <CardTitle color={nameColor}>{name}</CardTitle>
        </CardTitleHolder>
      </CardPresentation>
      <CardInfo isHovering={isHovering}>
        <MinimizedCardInfo>
          <CardInfoName>{name}</CardInfoName>
          <CardInfoTagHolder isCentered={false}>{renderTags}</CardInfoTagHolder>
        </MinimizedCardInfo>
        <MaximizedCardInfo>
          <MaximizedCardTitleHolder>
            <MaximizedCardIcon
              alt={`${name} logo`}
              src={`./media/logos/${logo}`}
              height={50}
              width={50}
            />
            <MaximizedCardTitle>{name}</MaximizedCardTitle>
          </MaximizedCardTitleHolder>
          <Desctiption>{description}</Desctiption>
          <CardInfoTagHolder isCentered={true}>
            {renderMaximazibleTags}
          </CardInfoTagHolder>
          <CardClickInfo>Click for more info</CardClickInfo>
        </MaximizedCardInfo>
      </CardInfo>
    </CardHolder>
  );
};

export default ProjectCard;
