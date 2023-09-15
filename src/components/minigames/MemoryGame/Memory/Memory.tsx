import styled from "styled-components";
import GameSection from "../../GameSection/GameSection";
import Button from "../../../Button/Button";
import TiteledText from "../../../textComponents/TitledText/TiteledText";
import Colors from "../../../../data/style/Colors";
import ColoredText from "../../../textComponents/ColoredText/ColoredText";
import MemoryTile from "../MemoryTile/MemoryTile";
import MemoryTileData, {
  MemoryDifficulty,
} from "../../../../Types/MemoryTileData";
import { useState, useCallback } from "react";
import useEffectOnce from "../../../../hooks/useEffectOnce";

const GameHolder = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  flex-direction: column;
  gap: 30px;
`;

const GameRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
`;

const ControlsHolder = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const StatsHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
`;

const TileHolder = styled.div`
  display: grid;
  grid-template-columns: 100px 100px 100px 100px;
  grid-template-rows: 100px 100px 100px 100px;
  gap: 10px;
`;

const PairsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;

  h3,
  p {
    margin: 0;
  }
`;

const ContinuousText = styled.div`
  display: flex;
`;

const NumberText = styled.div`
  width: 13px;
  display: flex;
  justify-content: center;
`;

const Memory = () => {
  const buttonStyle = {
    fontSize: 13,
    height: 30,
    width: 160,
    radius: 10,
    padding: 0,
  };

  const statStyle = {
    title: {
      size: "15px",
    },
    text: {
      size: "13px",
      color: Colors.lightTextGray,
    },
    gap: 3,
  };

  const [currentDifficulty, setCurrentDifficulty] = useState<MemoryDifficulty>(
    MemoryDifficulty.Easy
  );
  const [matching, setMatching] = useState<boolean>(false);
  const [currentValue, setCurrentValue] = useState<number>(0);

  const [canClick, setCanClick] = useState<boolean>(true);

  const [tiles, setTiles] = useState<MemoryTileData[]>(
    [...Array(16)].map((_, index) => ({
      id: index,
      isOpen: false,
      tileValue: 0,
      matched: false,
    }))
  );

  const setupGame = () => {
    const tileValues = [...Array(16)].map((_, index) => (index % 8) + 1);

    setTiles((prevTiles) => {
      const newTiles = [...prevTiles].map((newTile) => {
        const returnTile = { ...newTile };
        const randomValueIndex = Math.floor(
          Math.random() * (tileValues.length - 1)
        );
        returnTile.tileValue = tileValues[randomValueIndex];
        tileValues.splice(randomValueIndex, 1);
        return returnTile;
      });
      return newTiles;
    });
  };

  useEffectOnce(() => {
    setupGame();
  });

  const onTileClick = useCallback(
    (tileId: number) => {
      if (matching) {
        let matched = tiles.some(
          (tile) => tile.id === tileId && tile.tileValue === currentValue
        );

        setTiles((prevTiles) =>
          [...prevTiles].map((tile) =>
            tile.id === tileId ? { ...tile, isOpen: !tile.isOpen } : tile
          )
        );

        if (matched) {
          setTiles((prevTiles) =>
            [...prevTiles].map((tile) =>
              tile.tileValue === currentValue
                ? { ...tile, matched: true }
                : tile
            )
          );
        }

        setTimeout(() => {
          setTiles((prevTiles) =>
            [...prevTiles].map((tile) =>
              tile.isOpen && !tile.matched ? { ...tile, isOpen: false } : tile
            )
          );
          setCanClick(true);
        }, 1000);

        setCanClick(false);
        setCurrentValue(0);
      } else {
        setTiles((prevTiles) =>
          [...prevTiles].map((tile) => {
            if (tile.id === tileId) {
              setCurrentValue(tile.tileValue);
              return { ...tile, isOpen: !tile.isOpen };
            }
            return tile;
          })
        );
      }
      setMatching((prevMatching) => !prevMatching);
    },
    [matching, currentValue, tiles]
  );

  const renderTiles = tiles.map((tile) => (
    <MemoryTile
      id={tile.id}
      isOpen={tile.isOpen}
      key={tile.id}
      onClick={() => onTileClick(tile.id)}
      tileValue={tile.tileValue}
      currentDifficulty={currentDifficulty}
      matched={tile.matched}
      canClick={canClick}
    />
  ));

  return (
    <GameSection title="Memory">
      <>
        <p>The goal of this game is to match all the pairs.</p>
        <GameHolder>
          <GameRow>
            <TileHolder>{renderTiles}</TileHolder>
            <StatsHolder>
              <TiteledText
                title="Difficulty"
                text="Easy"
                styleObject={statStyle}
              />
              <PairsSection>
                <ColoredText
                  text="Pairs Matched"
                  styleData={{ size: "15px", weight: 700 }}
                />
                <ContinuousText>
                  <NumberText>
                    <ColoredText
                      text="15"
                      styleData={{ size: "13px", weight: 700 }}
                    />
                  </NumberText>
                  <ColoredText
                    text="/15"
                    styleData={{ size: "13px", color: Colors.lightTextGray }}
                  />
                </ContinuousText>
              </PairsSection>
              <TiteledText title="Moves" text="0" styleObject={statStyle} />
              <TiteledText
                title="Your minimum moves"
                text="15"
                styleObject={statStyle}
              />
            </StatsHolder>
          </GameRow>
          <ControlsHolder>
            <Button styleObject={buttonStyle}>Restart Game</Button>
            <Button styleObject={buttonStyle}>Change Difficulty</Button>
          </ControlsHolder>
        </GameHolder>
      </>
    </GameSection>
  );
};

export default Memory;
