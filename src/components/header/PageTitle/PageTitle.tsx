import styled from "styled-components";
import { useContext } from "react";
import ColoredText from "../../textComponents/ColoredText/ColoredText";
import ResponsiveContext from "../../../contexts/responsiveContext/ResponsiveContext.contextCreator";
import { presentation } from "../../../data/Pages/responsive/layout";

const Container = styled.header<{ $height: number; size: number }>`
  width: 100%;
  height: ${(props) => props.$height}px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: white;
  position: relative;

  h1 {
    font-size: ${(props) => props.size}px;
    font-weight: 800;
    color: black;
  }
`;

interface Props {
  title: string;
}

const PageTitle = ({ title }: Props) => {
  const { currentWidthBreakPoint } = useContext(ResponsiveContext);
  return (
    <Container
      $height={presentation[currentWidthBreakPoint].height}
      size={presentation[currentWidthBreakPoint].size}
    >
      <ColoredText
        text={title}
        styleData={{
          heading: 1,
        }}
      />
    </Container>
  );
};

export default PageTitle;
