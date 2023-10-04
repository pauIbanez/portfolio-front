import { useEffect, useState } from "react";
import styled from "styled-components";
import simonColors from "../../../../data/minigames/simon/tileColors";

const Tile = styled.div<{
  isShowing: boolean;
  canClick: boolean;
  tileValue: number;
}>`
  height: ${(props) => (props.tileValue % 2 ? "150px" : "100px")};
  width: ${(props) => (props.tileValue % 2 ? "100px" : "150px")};

  position: relative;
  user-select: none;
  cursor: pointer;
  pointer-events: ${(props) =>
    props.isShowing || !props.canClick ? "none" : "all"};

  background-color: ${(props) =>
    props.isShowing
      ? simonColors[props.tileValue].showing
      : simonColors[props.tileValue].normal};

  border-radius: 40px;
  transition: all ease-in-out 0.1s;

  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => simonColors[props.tileValue].normal};
  font-size: 30px;
  font-weight: 700;
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
      pulsate();
    }
  }, [isShowing]);

  const pulsate = () => {
    setIsPulsing(true);
    setTimeout(() => {
      setIsPulsing(false);
    }, 700);
  };

  return (
    <Tile
      isShowing={isPulsing}
      canClick={canClick}
      tileValue={tileValue}
      onClick={() => {
        onClick();
        pulsate();
      }}
      data-testid="simontile"
    >
      <p>{simonColors[tileValue].name}</p>
    </Tile>
  );
};

export default SimonTile;
