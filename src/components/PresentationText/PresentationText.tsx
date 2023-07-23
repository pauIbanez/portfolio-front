import styled from "styled-components";
import ColoredText from "../ColoredText/ColoredText";

const Holder = styled.section``;

interface Props {
  title: string;
  texts: string[];
  button: {
    content: JSX.Element | JSX.Element[];
    onClick(): void;
  };
}
const PresentationText = ({ title, texts, button }: Props) => {
  return (
    <Holder>
      <ColoredText text={title} styleData={{}} />
    </Holder>
  );
};

export default PresentationText;
