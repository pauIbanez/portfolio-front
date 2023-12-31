import styled from "styled-components";
import ColoredText from "../ColoredText/ColoredText";
import Button, { ButtonProps } from "../../Button/Button";
import React from "react";

const Holder = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 60px;
  height: 600px;
`;

const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  h2 {
    margin: 0;
  }
`;

interface Props {
  title: string;
  text: string;
  button: {
    content: React.JSX.Element | string;
    onClick(): void;
    buttonProps?: ButtonProps;
  };
}
const PresentationText = ({ title, text, button }: Props) => {
  return (
    <Holder>
      <TextSection>
        <ColoredText
          text={title}
          styleData={{ heading: 2, weight: 700, size: 30 }}
        />
        <ColoredText text={text} />
      </TextSection>
      <Button onClick={button.onClick} {...button.buttonProps}>
        {button.content}
      </Button>
    </Holder>
  );
};

export default PresentationText;
