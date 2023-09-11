import { useState } from "react";
import styled from "styled-components";
import ProjectCardInfo, { ProjectTag } from "../../../Types/ProjectCardInfo";
import Colors from "../../../data/style/Colors";

interface HoverProp {
  isHovering: boolean;
}

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

const CardInfo = styled.div<HoverProp>`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  transform: translateY(${(props) => (props.isHovering ? "0" : "440px")});
  height: 525px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all ease-in-out 0.2s;
`;

const MinimizedCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  gap: 13px;
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
  justify-content: flex-end;
  align-items: center;
  padding: 0 50px 25px 50px;
`;

const MaximizedCardTitleHolder = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const MaximizedCardIcon = styled.img``;

const MaximizedCardTitle = styled.h3`
  margin: 0;
  color: black;
  font-weight: 700;
  font-size: 30px;
`;

const Desctiption = styled.p``;

const MaximazableTag = styled.div<{ tag: ProjectTag; isHovering: boolean }>`
  width: 100px;
  height: 23px;
  font-size: 15px;

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  overflow: ${(props) => (props.isHovering ? "hidden" : "")};

  div {
    height: ${(props) => (props.isHovering ? "23px" : "20px")};
    color: ${(props) => props.tag.color};
    background-color: ${(props) => props.tag.backgroundColor};
    width: ${(props) => (props.isHovering ? "100%" : "20px")};
    overflow: hidden;
    border-radius: 15px;
    font-size: 13px;
    font-weight: 600;
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
  height: 30px;
  width: ${(props) => (props.isHovering ? "100px" : "30px")};
  background-color: ${(props) =>
    props.isHovering ? Colors.main : Colors.disabledMain};
  color: white;

  border-radius: 30px;
  z-index: 10;
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: cetner;
  transition: all ease-in-out 0.1s;
`;

const InteractiveText = styled.p<HoverProp>`
  display flex;
  align-items: center;
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
}

const ProjectCard = ({
  cardInfo: { name, description, image, tags, isInteractive },
}: Props) => {
  const [isHovering, setIsHovering] = useState<boolean>(false);

  const renderTags = tags.map((tag, index) => (
    <MinimizedTag
      src={`./media/tags/${tag.icon}`}
      alt={tag.name}
      key={tag.name + "-" + index}
    />
  ));

  const renderMaximazibleTags = tags.map((tag, index) => (
    <MaximazableTag
      tag={tag}
      key={tag.name + "-" + index}
      isHovering={isHovering}
    >
      <MinimizedTag src={`./media/tags/${tag.icon}`} alt={tag.name} />
      <div>{tag.name}</div>
    </MaximazableTag>
  ));

  return (
    <CardHolder
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
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
            src={`./media/${image}`}
            height={170}
            width={170}
          />
          <CardTitle>{name}</CardTitle>
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
              src={`./media/${image}`}
              height={65}
              width={65}
            />
            <MaximizedCardTitle>{name}</MaximizedCardTitle>
          </MaximizedCardTitleHolder>
          <Desctiption>{description}</Desctiption>
          <CardInfoTagHolder isCentered={true}>
            {renderMaximazibleTags}
          </CardInfoTagHolder>
        </MaximizedCardInfo>
      </CardInfo>
    </CardHolder>
  );
};

export default ProjectCard;
