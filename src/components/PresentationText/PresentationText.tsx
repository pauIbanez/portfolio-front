import styled from "styled-components";
import ColoredText from "../ColoredText/ColoredText";
import Button from "../Button/Button";

const Holder = styled.section``;

interface Props {
  title: string;
  texts: string[];
  button: {
    content: JSX.Element;
    onClick(): void;
  };
}
const PresentationText = ({ title, texts, button }: Props) => {
  const renderTexts = texts.map((text) => <ColoredText text={text} />);

  return (
    <Holder>
      <ColoredText
        text={title}
        styleData={{ heading: 2, weight: 700, size: "30px" }}
      />
      {renderTexts}
      <Button onClick={button.onClick}>{button.content}</Button>
    </Holder>
  );
};

export default PresentationText;
