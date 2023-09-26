import { useEffect, useState } from "react";
import styled from "styled-components";

const Tile = styled.div<{
  isShowing: boolean;
  canClick: boolean;
}>`
  height: 100px;
  width: 100px;

  position: relative;
  user-select: none;
  cursor: pointer;
  pointer-events: ${(props) =>
    props.isShowing || !props.canClick ? "none" : "all"};
`;

interface Props {
  id: number;
  onClick: () => void;
  tileValue: number;
  canClick: boolean;
  isShowing: boolean;
}

const SimonTile = ({ id, onClick, tileValue, canClick, isShowing }: Props) => {
  const [isPulsing, setIsPulsing] = useState<boolean>(false);

  useEffect(() => {
    if (isShowing) {
      setIsPulsing(true);
      setTimeout(() => {
        setIsPulsing(false);
      }, 700);
    }
  }, [isShowing]);

  return <Tile isShowing={isPulsing} canClick={canClick}></Tile>;
};

export default SimonTile;
