import styled from "styled-components";
import ColoredText from "../ColoredText/ColoredText";

const Container = styled.section`
  width: 100%;
  height: 280px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: white;
  color: black;

  font-size: 48px;
  font-weight: 800;
`;

interface Props {
  title: string | string[];
}

const PageTitle = ({ title }: Props) => {
  const text =
    typeof title === "string" ? (
      title
    ) : (
      <ColoredText textArray={title} styleData={{ isTitle: true }} />
    );

  return <Container>{text}</Container>;
};

export default PageTitle;
