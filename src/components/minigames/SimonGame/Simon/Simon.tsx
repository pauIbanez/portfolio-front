import styled from "styled-components";
import GameSection from "../../GameSection/GameSection";
import { useCallback, useRef, useState } from "react";
import SimonTileData from "../../../../Types/SimonTileData";
import useEffectOnce from "../../../../hooks/useEffectOnce";
import SimonTile from "../SimonTile/SimonTile";
import Wait from "../../../../utils/Wait/Wait";
import Button from "../../../Button/Button";
import TiteledText from "../../../textComponents/TitledText/TiteledText";
import Colors from "../../../../data/style/Colors";

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

const TileHolder = styled.div`
  margin: 0 auto;
  height: 350px;
  width: 350px;
  display: flex;
  align-items: center;
  justify-items: center;
  flex-direction: column;
  border-radius: 175px;
  overflow: hidden;
`;

const TileBackground = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  height: 380px;
  width: 380px;
  background-color: ${Colors.backgroundGray};
  border-radius: 190px;
  border: 2px solid ${Colors.disabledMain};
`;

const TileRow = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  gap: 150px;
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

const Simon = () => {
  const [tiles, setTiles] = useState<SimonTileData[]>([]);
  const round = useRef<number>(0);
  const sequence = useRef<number[]>([]);
  const expectedSequence = useRef<number[]>([]);
  const [canClick, setCanClick] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const [stats, setStats] = useState<{
    streak: number;
    maxStreak: number;
  }>({
    streak: 0,
    maxStreak: 0,
  });

  const startRound = useCallback(async () => {
    for (let i = 0; i < sequence.current.length; i++) {
      setTiles((prevTiles) =>
        prevTiles.map((prevTile) =>
          prevTile.tileValue === sequence.current[i]
            ? { ...prevTile, isShowing: true }
            : { ...prevTile }
        )
      );
      await Wait(700);
      setTiles((prevTiles) =>
        prevTiles.map((prevTile) => ({ ...prevTile, isShowing: false }))
      );
      await Wait(300);
    }

    setCanClick(true);
  }, []);

  const calculateRound = useCallback(async () => {
    round.current++;
    const newValue = Math.floor(Math.random() * 4);
    sequence.current.push(newValue);
    expectedSequence.current = [...sequence.current];
    startRound();
  }, [startRound]);

  const setupGame = useCallback(() => {
    setIsPlaying(true);
    setStats((prevStats) => ({
      ...prevStats,
      streak: 0,
    }));
    setCanClick(false);

    round.current = 0;
    sequence.current = [];
    calculateRound();
  }, [calculateRound]);

  useEffectOnce(() => {
    const newTiles: SimonTileData[] = [...Array(4)].map((_, index) => ({
      id: index,
      isShowing: false,
      tileValue: index,
    }));

    setTiles(newTiles);
    setStats((prevStats) => ({
      ...prevStats,
      maxStreak: localStorage.getItem(`simonStreak`)
        ? Number.parseInt(localStorage.getItem(`simonStreak`)!)
        : 0,
    }));
  });

  const onTileClick = useCallback(
    async (value: number) => {
      if (expectedSequence.current[0] === value) {
        expectedSequence.current.shift();
        if (expectedSequence.current.length === 0) {
          setCanClick(false);
          setStats((prevStats) => ({
            ...prevStats,
            streak: prevStats.streak++,
          }));
          await Wait(1500);
          calculateRound();
        }
      } else {
        setCanClick(false);
        setIsPlaying(false);
        let newMaxStreak = 0;
        const prevMaxStreak = localStorage.getItem(`simonStreak`);
        if (!prevMaxStreak || Number.parseInt(prevMaxStreak) < stats.streak) {
          newMaxStreak = stats.streak;
          localStorage.setItem(`simonStreak`, stats.streak.toString());
        }
        setStats({
          streak: 0,
          maxStreak: newMaxStreak === 0 ? stats.maxStreak : newMaxStreak,
        });
      }
    },
    [calculateRound, stats]
  );

  const renderTiles = tiles.map((tile) => (
    <SimonTile
      id={tile.id}
      canClick={canClick}
      isShowing={tile.isShowing}
      onClick={() => onTileClick(tile.tileValue)}
      tileValue={tile.tileValue}
      key={tile.id}
    />
  ));

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

  return (
    <GameSection title="Simon">
      <>
        <p>
          The goal of simon is to repeat the sequence for as long as you can!
        </p>
        <GameHolder>
          <GameRow>
            <TileBackground>
              <TileHolder>
                {renderTiles[0]}
                <TileRow>
                  {renderTiles[1]}
                  {renderTiles[3]}
                </TileRow>
                {renderTiles[2]}
              </TileHolder>
            </TileBackground>
            <StatsHolder>
              <TiteledText
                title="Streak"
                text={stats.streak.toString()}
                styleObject={statStyle}
              />
              <TiteledText
                title="Best Streak"
                text={stats.maxStreak.toString()}
                styleObject={statStyle}
              />
            </StatsHolder>
          </GameRow>
          <ControlsHolder>
            <Button styleObject={buttonStyle} onClick={setupGame}>
              {!isPlaying ? "Play Simon" : "Restart Game"}
            </Button>
          </ControlsHolder>
        </GameHolder>
      </>
    </GameSection>
  );
};

export default Simon;
