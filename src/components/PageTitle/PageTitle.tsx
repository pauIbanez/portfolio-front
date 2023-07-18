import styled from "styled-components";
import ColoredText from "../ColoredText/ColoredText";

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
  title: string | string[];
}

const PageTitle = ({ title }: Props) => {
  const text =
    typeof title === "string" ? (
      <h1>{title}</h1>
    ) : (
      <ColoredText textArray={title} styleData={{ isTitle: true }} />
    );

  return <Container>{text}</Container>;
};

export default PageTitle;
