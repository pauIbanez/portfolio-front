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
import { useState, useCallback, useEffect } from "react";
import useEffectOnce from "../../../../hooks/useEffectOnce";
import Wait from "../../../../utils/Wait/Wait";
import { useTranslation } from "react-i18next";

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
      size: 15,
    },
    text: {
      size: 13,
      color: Colors.lightTextGray,
    },
    gap: 3,
  };

  const [currentDifficulty, setCurrentDifficulty] = useState<MemoryDifficulty>(
    MemoryDifficulty.Easy
  );
  const [currentRenderDifficulty, setCurrentRenderDifficulty] =
    useState<MemoryDifficulty>(MemoryDifficulty.Easy);
  const [matching, setMatching] = useState<boolean>(false);
  const [currentValue, setCurrentValue] = useState<number>(0);
  const [canClick, setCanClick] = useState<boolean>(true);
  const [tiles, setTiles] = useState<MemoryTileData[]>([]);

  const [stats, setStats] = useState<{
    pairs: number;
    moves: number;
    minMoves: number;
  }>({
    minMoves: 0,
    moves: 0,
    pairs: 0,
  });

  const { t } = useTranslation();

  const setupGame = useCallback(async () => {
    setCanClick(false);
    setStats((prevStats) => ({
      ...prevStats,
      moves: 0,
      pairs: 0,
    }));

    const openTiles = tiles.some((tile) => tile.isOpen);

    if (openTiles) {
      setTiles((prevTiles) =>
        [...prevTiles].map((tile) => ({ ...tile, isOpen: false }))
      );
      await Wait(1000);
    }

    setMatching(false);
    setCurrentValue(0);

    const tileValues = [...Array(16)].map((_, index) => (index % 8) + 1);
    const newTiles = [...Array(16)].map((_, index) => {
      const randomValueIndex = Math.floor(
        Math.random() * (tileValues.length - 1)
      );
      const tileValue = tileValues[randomValueIndex];
      tileValues.splice(randomValueIndex, 1);
      return {
        id: index,
        isOpen: false,
        tileValue,
        matched: false,
      };
    });

    setTiles(newTiles);
    setCanClick(true);
  }, [tiles]);

  useEffectOnce(() => {
    setupGame();
    setStats((prevStats) => ({
      ...prevStats,
      minMoves: localStorage.getItem(`memoryMoves${currentDifficulty}`)
        ? Number.parseInt(
            localStorage.getItem(`memoryMoves${currentDifficulty}`)!
          )
        : 0,
    }));
  });

  useEffect(() => {
    if (stats.pairs === 8) {
      let newMinMoves = 0;
      const prevMoves = localStorage.getItem(`memoryMoves${currentDifficulty}`);
      if (!prevMoves || Number.parseInt(prevMoves) > stats.moves) {
        newMinMoves = stats.moves;
        localStorage.setItem(
          `memoryMoves${currentDifficulty}`,
          stats.moves.toString()
        );
        if (newMinMoves !== 0) {
          setStats({ ...stats, minMoves: newMinMoves });
        }
      }
    }
  }, [stats, currentDifficulty]);

  const changeDifficulty = useCallback(async () => {
    setCanClick(false);
    let newDiff = 0;

    if (currentDifficulty !== MemoryDifficulty.Hard) {
      newDiff = currentDifficulty + 1;
    } else {
      newDiff = MemoryDifficulty.Easy;
    }

    setCurrentRenderDifficulty(newDiff);
    setStats((prevStats) => ({
      ...prevStats,
      minMoves: localStorage.getItem(`memoryMoves${newDiff}`)
        ? Number.parseInt(localStorage.getItem(`memoryMoves${newDiff}`)!)
        : 0,
    }));

    await setupGame();
    setCurrentDifficulty(newDiff);
  }, [currentDifficulty, setupGame]);

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
          setStats((prevStats) => ({
            ...prevStats,
            pairs: prevStats.pairs + 1,
          }));
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
        setStats((prevStats) => ({
          ...prevStats,
          moves: prevStats.moves + 1,
        }));
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
    <GameSection title={t("Minigames.memory.title")}>
      <>
        <p>{t("Minigames.memory.text")}</p>
        <GameHolder>
          <GameRow>
            <TileHolder>{renderTiles}</TileHolder>
            <StatsHolder>
              <TiteledText
                title={t("Minigames.memory.stats.difficulty")}
                text={t(
                  `Minigames.memory.stats.difficulties.${currentRenderDifficulty}`
                )}
                styleObject={statStyle}
              />
              <PairsSection>
                <ColoredText
                  text={t("Minigames.memory.stats.pairs")}
                  styleData={{ size: 15, weight: 700 }}
                />
                <ContinuousText>
                  <NumberText>
                    <ColoredText
                      text={stats.pairs.toString()}
                      styleData={{ size: 13, weight: 700 }}
                    />
                  </NumberText>
                  <ColoredText
                    text="/8"
                    styleData={{ size: 13, color: Colors.lightTextGray }}
                  />
                </ContinuousText>
              </PairsSection>
              <TiteledText
                title={t("Minigames.memory.stats.moves")}
                text={stats.moves.toString()}
                styleObject={statStyle}
              />
              <TiteledText
                title={t("Minigames.memory.stats.minMoves")}
                text={stats.minMoves.toString()}
                styleObject={statStyle}
              />
            </StatsHolder>
          </GameRow>
          <ControlsHolder>
            <Button styleObject={buttonStyle} onClick={setupGame}>
              {t("Minigames.memory.buttons.reset")}
            </Button>
            <Button styleObject={buttonStyle} onClick={changeDifficulty}>
              {t("Minigames.memory.buttons.difficulty")}
            </Button>
          </ControlsHolder>
        </GameHolder>
      </>
    </GameSection>
  );
};

export default Memory;
