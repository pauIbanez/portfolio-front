import styled from "styled-components";
import Colors from "../../data/style/Colors";

interface ButotnCaseProps {
  reversed?: boolean;
  $active?: boolean;
  style?: {
    height?: number;
    width?: number;
    fontSize?: number;
    fontWeight?: number;
    radius?: number;
  };
}
const ButtonCase = styled.button<ButotnCaseProps>`
  disply: flex;
  align-items: center;
  justify-content: center;

  padding: 0 30px 0 30px;

  height: ${(props) =>
    props.style?.height ? props.style.height + "px" : "60px"};
  width: ${(props) =>
    props.style?.width ? props.style.width + "px" : "fit-content"};

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
    props.style?.radius ? props.style.radius + "px" : "20px"};

  font-size: ${(props) =>
    props.style?.fontSize ? props.style.fontSize + "px" : "20px"};

  font-weight: ${(props) =>
    props.style?.fontWeight ? props.style.fontWeight : 400};

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
  onClick: () => void;
  reversed?: boolean;
  active?: boolean;
  children: JSX.Element | string;
  disabled?: boolean;
  style?: {
    width?: number;
    height?: number;
    fontSize?: number;
    fontWeight?: number;
    radius?: number;
  };
}

const Button = ({
  onClick,
  reversed,
  children,
  disabled,
  style,
  active,
}: Props) => {
  return (
    <ButtonCase
      onClick={onClick}
      disabled={disabled}
      reversed={reversed}
      style={style}
      $active={active}
    >
      {children}
    </ButtonCase>
  );
};

export default Button;
