import styled from "styled-components";
import ColoredText from "../textComponents/ColoredText/ColoredText";

const Container = styled.header`
  width: 100%;
  height: 280px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: white;

  h1 {
    font-size: 48px;
    font-weight: 800;
    color: black;
  }
`;

interface Props {
  title: string;
}

const PageTitle = ({ title }: Props) => {
  return (
    <Container>
      <ColoredText text={title} styleData={{ heading: 1 }} />
    </Container>
  );
};

export default PageTitle;
