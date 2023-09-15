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
  border-radius: 10px;
  background-color: ${Colors.backgroundGray};
  border: 2px solid ${Colors.disabledMain};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  cursor: pointer;
  pointer-events: ${(props) =>
    props.matched || props.isOpen || !props.canClick ? "none" : "all"};

  img {
    position: absolute;
    inset: 0;
    margin: auto auto;

    &:nth-child(1) {
      opacity: ${(props) => (props.isOpen ? "0" : "1")};
    }
    &:nth-child(2) {
      opacity: ${(props) => (props.isOpen ? "1" : "0")};
    }
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
      <img src="/media/minigames/memory/back.png" alt="logo" />
      <img
        src={`/media/minigames/memory/${currentImage}.png`}
        alt="tile Icon"
      />
    </Tile>
  );
};

export default MemoryTile;
