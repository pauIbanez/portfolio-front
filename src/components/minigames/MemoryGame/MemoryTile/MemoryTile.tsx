import styled from "styled-components";
import Colors from "../../../../data/style/Colors";
import { MemoryDifficulty } from "../../../../Types/MemoryTileData";
import { useState, useEffect } from "react";

const Tile = styled.div<{
  isOpen: boolean;
  matched: boolean;
  canClick: boolean;
}>`
  height: 100px;
  width: 100px;

  position: relative;

  cursor: pointer;
  pointer-events: ${(props) =>
    props.matched || props.isOpen || !props.canClick ? "none" : "all"};
`;

const Face = styled.div<{ isBack?: boolean; isOpen: boolean }>`
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

  ${(props) =>
    props.isBack ? (props.isOpen ? "transform: rotateY(180deg);" : "") : ""}

  ${(props) =>
    !props.isBack ? (props.isOpen ? "" : "transform: rotateY(180deg);") : ""}
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

const tileImages: { [Key: string]: { [key: number]: string } } = {
  easy: {
    1: "javaScript",
    2: "typeScript",
    3: "react",
    4: "next",
    5: "jest",
    6: "frontEnd",
    7: "backEnd",
    8: "fullStack",
  },
};

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

  useEffect(() => {
    let image = "";
    switch (currentDifficulty) {
      case MemoryDifficulty.Easy:
        image = tileImages.easy[tileValue] as string;

        break;
    }
    setCurrentImage(image);
  }, [currentDifficulty, tileValue]);

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
    >
      <Face isBack={true} isOpen={isOpen}>
        <img src="/media/minigames/memory/back.png" alt="logo" />
      </Face>
      <Face isOpen={isOpen}>
        <img
          src={`/media/minigames/memory/${currentImage}.png`}
          alt="tile Icon"
        />
      </Face>
    </Tile>
  );
};

export default MemoryTile;
