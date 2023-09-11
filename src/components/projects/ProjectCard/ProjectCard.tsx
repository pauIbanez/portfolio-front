import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import ProjectCardInfo from "../../../Types/ProjectCardInfo";
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
  height: ${(props) => (props.isHovering ? "100%" : "85px")};
  display: flex;
  flex-direction: column;
  background-color: white;
  justify-content: space-between;
  padding: 15px 25px;
  transition: all ease-in-out 0.1s;
`;

const CardInfoName = styled.h4<HoverProp>`
  margin: 0;
  color: black;
  font-weight: 700;
  font-size: 16px;

  opacity: ${(props) => (props.isHovering ? "0" : "1")};
  transition: all ease-in-out 0.1s;
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

const InteractiveIcon = styled.div<HoverProp>`
  position: absolute;
  top: 18px;
  right: 18px;
  height: 30px;
  width: ${(props) => (props.isHovering ? "100px" : "30px")};
  background-color: ${(props) =>
    props.isHovering ? Colors.main : Colors.disabledMain};
  color: white;
  font-size: 15px;
  // font-weight: 700;
  border-radius: 30px;
  z-index: 10;

  transition: all ease-in-out 0.1s;
`;

const InteractiveText = styled.p<HoverProp>`
  display flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  height: 100%;
  width: ${(props) => (props.isHovering ? "100%" : "30px")};
  transition: all  0.1s ease-in-out 0.1s;
  margin: 0;

`;

interface Props {
  cardInfo: ProjectCardInfo;
}

const ProjectCard = ({
  cardInfo: { name, description, image, tags, isInteractive },
}: Props) => {
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const isHoveringRef = useRef<boolean>(false);
  const [interactiveContent, setInteractiveContent] = useState<string>("i");

  const renderTags = tags.map((tag) => (
    <MinimizedTag
      src={`./media/tags/${tag.icon}`}
      alt={tag.name}
      key={tag.name}
    />
  ));

  useEffect(() => {
    isHoveringRef.current = isHovering;
    if (isHovering) {
      setTimeout(() => {
        if (isHoveringRef.current) {
          setInteractiveContent("interactive");
        }
      }, 100);
    } else {
      setInteractiveContent("i");
    }
  }, [isHovering]);

  return (
    <CardHolder
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <CardPresentation>
        {isInteractive && (
          <InteractiveIcon isHovering={isHovering}>
            <InteractiveText isHovering={isHovering}>
              {interactiveContent}
            </InteractiveText>
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
        <CardInfoName isHovering={isHovering}>{name}</CardInfoName>
        <CardInfoTagHolder>{renderTags}</CardInfoTagHolder>
      </CardInfo>
    </CardHolder>
  );
};

export default ProjectCard;
