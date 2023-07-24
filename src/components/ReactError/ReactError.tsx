import styled from "styled-components";
import { useRef, useState, useEffect } from "react";

enum Animations {
  "fade",
  "intant",
  "fadeOut",
}

enum Point {
  "start",
  "end",
  "center",
}

export interface ReactErrorOptions {
  animation?: Animations;
  offset?: {
    x: number;
    y: number;
  };
  block?: Point;
  inline?: Point;
}

const ErrorHolder = styled.div<{ x: number; y: number; $active: boolean }>`
  position: absolute;
  bottom: ${(props) => props.y}px;
  left: ${(props) => props.x}px;
  opacity: ${(props) => (props.$active ? "1" : 0)};
  transition: opacity ease-out 200ms;
`;

const ErrorContentHolder = styled.div`
  padding: 10px 30px;
  background-color: white;
  border-radius: 15px;
  box-shadow: 6px 6px 25px rgba(0, 0, 0, 0.2), -6px -6px 25px rgba(0, 0, 0, 0.2);
`;

const Shape = styled.div`
  position: absolute;
  width: 0;
  height: 0;

  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid white;

  top: -10px;
  left: 20px;
`;

const Content = styled.p`
  font-size: 18px;
  color: red;
  white-space: nowrap;
`;

interface Props {
  options?: ReactErrorOptions;
  content?: string;
  children?: JSX.Element | JSX.Element[];
  active: boolean;
  time?: number;
}

const ReactError = ({ options, content, children, active, time }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(active);
    if (active) {
      setTimeout(() => {
        setIsActive(false);
      }, 2000);
    }
  }, [active]);

  return (
    <ErrorHolder
      x={-20}
      y={-(ref.current?.clientHeight || 10) - 15}
      ref={ref}
      $active={isActive}
    >
      {children ? (
        children
      ) : (
        <ErrorContentHolder>
          <Content>{content ?? "No content"}</Content>
        </ErrorContentHolder>
      )}
      <Shape />
    </ErrorHolder>
  );
};

export default ReactError;
