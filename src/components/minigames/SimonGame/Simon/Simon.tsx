import styled from "styled-components";
import GameSection from "../../GameSection/GameSection";
import { useCallback, useEffect, useRef, useState } from "react";
import SimonTileData from "../../../../Types/SimonTileData";
import useEffectOnce from "../../../../hooks/useEffectOnce";
import SimonTile from "../SimonTile/SimonTile";
import Wait from "../../../../utils/Wait/Wait";
import Button from "../../../Button/Button";

const GameHolder = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  flex-direction: column;
  gap: 30px;
`;

const TileHolder = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  flex-direction: column;
  height: 350px;
  width: 350px;
  overflow: hidden;
  border-radius: 175px;
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

const Simon = () => {
  const [tiles, setTiles] = useState<SimonTileData[]>([]);
  const round = useRef<number>(0);
  const sequence = useRef<number[]>([]);
  const expectedSequence = useRef<number[]>([]);
  const [canClick, setCanClick] = useState<boolean>(false);
  const [stats, setStats] = useState<{
    streak: number;
    maxStreak: number;
  }>({
    streak: 0,
    maxStreak: 0,
  });

  const startRound = useCallback(async () => {
    console.log(sequence.current);
    for (let i = 0; i < sequence.current.length; i++) {
      setTiles((prevTiles) =>
        prevTiles.map((prevTile) =>
          prevTile.tileValue === sequence.current[i]
            ? { ...prevTile, isShowing: true }
            : { ...prevTile }
        )
      );
      console.log("showing tile ", sequence.current[i]);
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
    setStats((prevStats) => ({
      ...prevStats,
      streak: 0,
    }));
    setCanClick(false);

    const newTiles: SimonTileData[] = [...Array(4)].map((_, index) => ({
      id: index,
      isShowing: false,
      tileValue: index,
    }));

    setTiles(newTiles);
    round.current = 1;
    sequence.current = [];
    calculateRound();
  }, [calculateRound]);

  useEffectOnce(() => {
    setupGame();
    setStats((prevStats) => ({
      ...prevStats,
      maxStreak: localStorage.getItem(`simonStreak`)
        ? Number.parseInt(localStorage.getItem(`simonStreak`)!)
        : 0,
    }));
  });

  const onTileClick = async (value: number) => {
    console.log("clicked", value);

    if (expectedSequence.current[0] === value) {
      expectedSequence.current.shift();
      if (expectedSequence.current.length === 0) {
        setCanClick(false);
        await Wait(1500);
        calculateRound();
      }
    } else {
      console.log("FAILED");
    }
  };

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

  return (
    <GameSection title="Simon">
      <>
        <p>
          The goal of simon is to repeat the sequence for as long as you can!
        </p>
        <GameHolder>
          <TileHolder>
            {renderTiles[0]}
            <TileRow>
              {renderTiles[1]}
              {renderTiles[3]}
            </TileRow>
            {renderTiles[2]}
          </TileHolder>
          <ControlsHolder>
            <Button styleObject={buttonStyle} onClick={setupGame}>
              Restart Game
            </Button>
          </ControlsHolder>
        </GameHolder>
      </>
    </GameSection>
  );
};

export default Simon;
