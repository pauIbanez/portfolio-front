import styled from "styled-components";
import Colors from "../../data/style/Colors";

interface ButotnCaseProps {
  reversed?: boolean;
  $active?: boolean;
  styleObject?: {
    height?: number;
    width?: number;
    fontSize?: number;
    fontWeight?: number;
    radius?: number;
    padding?: number;
  };
}
const ButtonCase = styled.button<ButotnCaseProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${(props) =>
    props.styleObject?.padding
      ? `0 ${props.styleObject.padding}px 0 ${props.styleObject.padding}px`
      : "0 30px 0 30px"};
  font-family: inherit;

  user-select: none;
  :gap: 8px;
  height: ${(props) =>
    props.styleObject?.height ? props.styleObject.height + "px" : "60px"};
  width: ${(props) =>
    props.styleObject?.width ? props.styleObject.width + "px" : "fit-content"};

  background-color: ${(props) =>
    props.$active ? "white" : props.reversed ? "white" : Colors.main};

  color: ${(props) =>
    props.$active ? Colors.main : props.reversed ? Colors.main : "white"};

  border: ${(props) =>
    props.$active
      ? "3px solid " + Colors.main
      : props.reversed
      ? "3px solid " + Colors.main
      : "none"};

  border-radius: ${(props) =>
    props.styleObject?.radius ? props.styleObject.radius + "px" : "20px"};

  font-size: ${(props) =>
    props.styleObject?.fontSize ? props.styleObject.fontSize + "px" : "20px"};

  font-weight: ${(props) =>
    props.styleObject?.fontWeight ? props.styleObject.fontWeight : 400};

  cursor: pointer;

  p {
    margin: 0;
  }

  &:hover:enabled {
    background-color: ${(props) => (props.reversed ? Colors.main : "white")};
    color: ${(props) => (props.reversed ? "white" : Colors.main)};

    border: ${(props) => (props.reversed ? "none" : "3px solid" + Colors.main)};
  }

  &:disabled {
    cursor: inherit;
    color: ${Colors.disabledTextGray};
    background-color: ${Colors.disabledMain};
  }
`;

interface Props {
  onClick?: () => void;
  reversed?: boolean;
  active?: boolean;
  children: JSX.Element | string;
  disabled?: boolean;
  submit?: boolean;
  styleObject?: {
    width?: number;
    height?: number;
    fontSize?: number;
    fontWeight?: number;
    radius?: number;
    padding?: number;
  };
}

const Button = ({
  onClick,
  reversed,
  children,
  disabled,
  styleObject,
  submit,
  active,
}: Props) => {
  return (
    <ButtonCase
      onClick={onClick}
      type={submit ? "submit" : "button"}
      disabled={disabled}
      reversed={reversed}
      styleObject={styleObject}
      $active={active}
    >
      {children}
    </ButtonCase>
  );
};

export default Button;
