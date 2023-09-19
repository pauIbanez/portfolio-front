import styled from "styled-components";
import ColoredText from "../ColoredText/ColoredText";

const TextSection = styled.div<{ gap?: number; textAlign?: "left" | "center" }>`
  display: flex;
  flex-direction: column;
  ${(props) =>
    props.textAlign && props.textAlign === "center"
      ? "align-items: center;"
      : ""}
  gap: ${(props) => props.gap ?? 15}px;

  h2,
  h3,
  h4,
  h5,
  h1,
  p {
    margin: 0;
  }
`;

interface Props {
  title: string;
  text: string;
  styleObject?: {
    title?: {
      size?: number;
      weight?: number;
      color?: string;
      accentColor?: string;
      heading?: number;
    };
    text?: {
      size?: number;
      weight?: number;
      color?: string;
      accentColor?: string;
    };
    gap?: number;
    textAlign?: "left" | "center";
  };
}
const TiteledText = ({ title, text, styleObject }: Props) => {
  return (
    <TextSection gap={styleObject?.gap} textAlign={styleObject?.textAlign}>
      <ColoredText
        text={title}
        styleData={{
          heading: styleObject?.title?.heading ?? 3,
          weight: styleObject?.title?.weight ?? 700,
          size: styleObject?.title?.size ?? 20,
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
