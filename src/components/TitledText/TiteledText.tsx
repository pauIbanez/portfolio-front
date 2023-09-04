import styled from "styled-components";
import ColoredText from "../ColoredText/ColoredText";

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
  styleObject?: {
    title?: {
      size?: string;
      weight?: number;
      color?: string;
      accentColor?: string;
      heading?: number;
    };
    text?: {
      size?: string;
      weight?: number;
      color?: string;
      accentColor?: string;
    };
  };
}
const TiteledText = ({ title, text, styleObject }: Props) => {
  return (
    <TextSection>
      <ColoredText
        text={title}
        styleData={{
          heading: styleObject?.title?.heading ?? 3,
          weight: styleObject?.title?.weight ?? 700,
          size: styleObject?.title?.size ?? "20px",
          accentColor: styleObject?.title?.accentColor,
          color: styleObject?.title?.color,
        }}
      />
      <ColoredText
        text={text}
        styleData={{
          weight: styleObject?.text?.weight,
          size: styleObject?.text?.size,
          accentColor: styleObject?.text?.accentColor,
          color: styleObject?.text?.color,
        }}
      />
    </TextSection>
  );
};

export default TiteledText;
