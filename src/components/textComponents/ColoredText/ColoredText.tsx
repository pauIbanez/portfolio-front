import styled from "styled-components";
import Colors from "../../../data/style/Colors";
import parseAccents from "../../../utils/parseAccents/parseAccents";

interface Props {
  text: string;
  styleData?: {
    size?: string;
    weight?: number;
    color?: string;
    accentColor?: string;
    heading?: number;
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
const Text = styled.div<Section>`
  font-size: ${(props) => props.size || "14px"};
  font-weight: ${(props) => props.weight || 400};
  color: ${(props) => props.color || "black"};
  white-space: pre-line;
`;

const ColoredText = ({ text, styleData }: Props) => {
  const textArray = [...parseAccents(text)];

  let renderElement = <></>;

  if (!styleData || !styleData.heading) {
    renderElement = (
      <Text
        color={styleData?.color}
        size={styleData?.size}
        weight={styleData?.weight}
        as={"p"}
      >
        {textArray.map((text, index) =>
          index % 2 ? (
            <ColoredSection color={styleData?.accentColor} key={text}>
              {text}
            </ColoredSection>
          ) : (
            text
          )
        )}
      </Text>
    );
  } else {
    renderElement = (
      <Text
        color={styleData.color}
        size={styleData.size}
        weight={styleData.weight}
        as={`h${styleData.heading}` as any}
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
    );
  }

  return renderElement;
};

export default ColoredText;
