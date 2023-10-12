import styled from "styled-components";
import Colors from "../../../data/style/Colors";
import ScrollContext from "../../../contexts/scrollContext/ScrollContext.contextCreator";
import React, { useContext, useRef, useState, useEffect } from "react";
import useEffectOnce from "../../../hooks/useEffectOnce";
import ResponsiveContext from "../../../contexts/responsiveContext/ResponsiveContext.contextCreator";
import { textSizes } from "../../../data/Pages/responsive/cvPage";

const Container = styled.section`
  width: 100%;
  background-color: white;
  color: ${Colors.textGray};
  border-radius: 15px;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1), -4px -4px 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h3<{ $size: number }>`
  font-weight: 700;
  font-size: ${(props) => props.$size}px;
  color: black;
  margin: 0;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px 70px 20px 70px;
`;

const Holder = styled.div`
  padding: 0 70px 40px 70px;

  p {
    margin: 0;
  }
`;

interface Props {
  title: string;
  name?: string;
  children: React.JSX.Element;
}
const CVSection = ({ name, title, children }: Props) => {
  const section = useRef(null);
  const [prevTitle, setPrevTitle] = useState<string>("");
  const { loadItem, updateItem } = useContext(ScrollContext);
  const { currentWidthBreakPoint } = useContext(ResponsiveContext);

  useEffectOnce(() => {
    loadItem({ name: name ? name : title, ref: section });
  });

  useEffect(() => {
    if (prevTitle !== title) {
      setPrevTitle(title);
      updateItem(section, name ? name : title);
    }
  }, [name, prevTitle, title, updateItem]);

  return (
    <Container ref={section}>
      <Content>
        <Title $size={textSizes[currentWidthBreakPoint].titles}>{title}</Title>
      </Content>
      <Holder>{children}</Holder>
    </Container>
  );
};

export default CVSection;
