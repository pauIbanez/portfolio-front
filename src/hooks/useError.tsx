import styled from "styled-components";
import { useRef, useCallback, RefObject } from "react";
import ReactDOM from "react-dom";

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

export interface ReactErrorData {
  name: string;
  content: string | JSX.Element;
  ref: RefObject<HTMLDivElement>;
  options?: ReactErrorOptions;
}

interface ReactError {
  name: string;
  content: JSX.Element;
  ref: RefObject<HTMLDivElement>;
  options?: ReactErrorOptions;
  portal: HTMLElement | null;
}

const defaultOptions: ReactErrorOptions = {
  animation: Animations.fadeOut,
  block: Point.end,
  inline: Point.start,
  offset: {
    x: 0,
    y: 0,
  },
};

const ErrorHolder = styled.div<{ x: number; y: number }>`
  position: absolute;
  top: ${(props) => props.y}px;
  left: ${(props) => props.x}px;
`;

const ErrorContentHolder = styled.div`
  padding: 0 30px;
  font-size: 16px;
  color: red;
`;

const useError = (options?: ReactErrorOptions) => {
  const errors = useRef<ReactError[]>([]);

  const loadError = (error: ReactErrorData) => {
    ReactDOM.createPortal(
      <div id={error.name}>{error.content.toString()}</div>,
      document.body
    );

    const portal = document.getElementById(error.name);
    const newError: ReactError = {
      ...error,
      portal,
      content:
        typeof error.content === "string" ? (
          <ErrorContentHolder>{error.content}</ErrorContentHolder>
        ) : (
          error.content
        ),
    };

    errors.current.push(newError);
  };

  const showError = (name: string) => {
    const foundError = errors.current.find((error) => error.name === name);

    if (!foundError) {
      console.error("Error not found for name: " + name);
      return;
    }
  };

  const getErrors = () => errors.current;

  return {
    loadError,
    showError,
    getErrors,
  };
};

export default useError;
