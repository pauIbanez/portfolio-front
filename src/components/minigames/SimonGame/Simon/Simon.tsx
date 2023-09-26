import styled from "styled-components";
import GameSection from "../../GameSection/GameSection";
import { useCallback, useState } from "react";
import SimonTileData from "../../../../Types/SimonTileData";
import useEffectOnce from "../../../../hooks/useEffectOnce";

const GameHolder = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  flex-direction: column;
  gap: 30px;
`;

const Simon = () => {
  const [tiles, setTiles] = useState<SimonTileData[]>([]);
  const [stats, setStats] = useState<{
    streak: number;
    maxStreak: number;
  }>({
    streak: 0,
    maxStreak: 0,
  });

  const setupGame = useCallback(() => {}, []);

  useEffectOnce(() => {
    setupGame();
    setStats((prevStats) => ({
      ...prevStats,
      maxStreak: localStorage.getItem(`simonStreak`)
        ? Number.parseInt(localStorage.getItem(`simonStreak`)!)
        : 0,
    }));
  });

  return (
    <GameSection title="Simon">
      <>
        <p>
          The goal of simon is to repeat the sequence for as long as you can!
        </p>
        <GameHolder></GameHolder>
      </>
    </GameSection>
  );
};

export default Simon;
