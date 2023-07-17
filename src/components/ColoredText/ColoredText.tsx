import { styled } from "styled-components";
import Colors from "../../data/style/Colors";

interface Props {
  textArray: string[];
  styleData?: {
    size?: string;
    weight?: number;
    color?: string;
    accentColor?: string;
    isTitle?: boolean;
  };
}
interface ColoredSectionProps {
  color?: string;
}
const ColoredSection = styled.span<ColoredSectionProps>`
  color: ${(props) => props.color || Colors.main};
`;

interface Section {
  size?: string;
  weight?: number;
  color?: string;
  accentColor?: string;
}
const Text = styled.p<Section>`
  font-size: ${(props) => props.size || "14px"};
  font-weight: ${(props) => props.weight || 400};
  color: ${(props) => props.color || "black"};
`;

const Title = styled.h1`
  font-size: 48px;
  font-weight: 800;
  color: Black;
`;

/**
 * Creates a text with accented words
 *
 * @param textArray - The array containing the text to highlight, every odd index is going to be highlighted. Example ["Hello", "world", "somthing else"] -> "world" is going to be highlighted
 * @param styleData - Specific style information
 */
const ColoredText = ({ textArray, styleData }: Props) => {
  return (
    <>
      {!styleData?.isTitle ? (
        <Text
          color={styleData?.color}
          size={styleData?.size}
          weight={styleData?.weight}
        >
          {textArray.map((text, index) =>
            index % 2 ? (
              <ColoredSection color={styleData?.accentColor} key={index}>
                {text}
              </ColoredSection>
            ) : (
              text
            )
          )}
        </Text>
      ) : (
        <Title>
          {textArray.map((text, index) =>
            index % 2 ? (
              <ColoredSection color={styleData?.accentColor} key={index}>
                {text}
              </ColoredSection>
            ) : (
              text
            )
          )}
        </Title>
      )}
    </>
  );
};

export default ColoredText;
