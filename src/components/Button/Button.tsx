import styled from "styled-components";
import Colors from "../../data/style/Colors";

interface Props {
  onClick: () => void;
  reversed?: boolean;
  children: JSX.Element;
  disabled?: boolean;
  size?: {
    width: number;
    height: number;
  };
}

interface ButotnCaseProps {
  reversed?: boolean;
  size?: {
    height: number;
    width: number;
  };
}
const ButtonCase = styled.button<ButotnCaseProps>`
  disply: flex;
  align-items: center;
  justify-content: center;

  height: 50px;
  width: 100px;

  background-color: ${(props) => (props.reversed ? "white" : Colors.main)};
  color: ${(props) => (props.reversed ? Colors.main : "white")};

  border: ${(props) => (props.reversed ? `3px solid ${Colors.main}` : "none")};
  border-radius: 15px;
`;

const Button = ({ onClick, reversed, children, disabled, size }: Props) => {
  return (
    <ButtonCase
      onClick={onClick}
      disabled={disabled}
      reversed={reversed}
      size={size}
    >
      {children}
    </ButtonCase>
  );
};

export default Button;
