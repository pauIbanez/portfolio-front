import styled, { keyframes } from "styled-components";
import Colors from "../../../../data/style/Colors";
import { MemoryDifficulty } from "../../../../Types/MemoryTileData";
import { useState, useEffect } from "react";
import tileImages from "../../../../data/minigames/memory/tileImages";

const Tile = styled.div<{
  isOpen: boolean;
  matched: boolean;
  canClick: boolean;
}>`
  height: 100px;
  width: 100px;

  position: relative;
  user-select: none;
  cursor: pointer;
  pointer-events: ${(props) =>
    props.matched || props.isOpen || !props.canClick ? "none" : "all"};
`;

const Face = styled.div<{
  isBack?: boolean;
  isOpen: boolean;
  fullyMatched: boolean;
}>`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform-style: preserve-3d;
  backface-visibility: hidden;

  transition: transform 0.8s;

  background-color: ${(props) =>
    props.isBack ? Colors.backgroundGray : Colors.disabledMain};

  border: 2px solid
    ${(props) => (props.isBack ? Colors.disabledMain : Colors.main)};
  border-radius: 10px;

  animation: ${(props) => (props.fullyMatched ? pop : "")} ease-in-out 0.2s;

  ${(props) =>
    props.isBack ? (props.isOpen ? "transform: rotateY(180deg);" : "") : ""}

  ${(props) =>
    !props.isBack ? (props.isOpen ? "" : "transform: rotateY(180deg);") : ""}
`;

const pop = keyframes`
  0%{
    transform: Scale(1);
  } 
  50%{
    transform: Scale(1.1);
  }
  100%{
    transform: Scale(1);
  }
`;

interface Props {
  id: number;
  isOpen: boolean;
  matched: boolean;
  onClick: () => void;
  tileValue: number;
  currentDifficulty: MemoryDifficulty;
  canClick: boolean;
}

const MemoryTile = ({
  id,
  isOpen,
  onClick,
  tileValue,
  currentDifficulty,
  matched,
  canClick,
}: Props) => {
  const [currentImage, setCurrentImage] = useState<string>("");
  const [fullyMatched, setFullyMatched] = useState<boolean>(false);

  useEffect(() => {
    let image = "";
    switch (currentDifficulty) {
      case MemoryDifficulty.Easy:
        image = tileImages.easy[tileValue] as string;
        break;

      case MemoryDifficulty.Normal:
        image = tileImages.normal[tileValue] as string;
        break;

      case MemoryDifficulty.Hard:
        image = tileImages.hard[tileValue] as string;
        break;
    }
    setCurrentImage(image);
  }, [currentDifficulty, tileValue]);

  useEffect(() => {
    if (!matched) {
      setFullyMatched(false);
    } else {
      setTimeout(() => {
        setFullyMatched(true);
      }, 900);
    }
  }, [matched]);

  return (
    <Tile
      onClick={() => {
        if (!matched && !isOpen && canClick) {
          onClick();
        }
      }}
      isOpen={isOpen}
      matched={matched}
      canClick={canClick}
      data-testid="memoryTile"
    >
      <Face isBack={true} isOpen={isOpen} fullyMatched={fullyMatched}>
        <img
          src="/media/minigames/memory/back.png"
          alt="logo"
          draggable="false"
          height={50}
          width={50}
        />
      </Face>
      <Face isOpen={isOpen} fullyMatched={fullyMatched}>
        <img
          src={`/media/minigames/memory/${currentImage}.png`}
          alt={`tile icon - ${currentImage}`}
          draggable="false"
          height={50}
          width={50}
        />
      </Face>
    </Tile>
  );
};

export default MemoryTile;
