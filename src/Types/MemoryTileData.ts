interface MemoryTileData {
  id: number;
  isOpen: boolean;
  tileValue: number;
  matched: boolean;
}

export enum MemoryDifficulty {
  Easy,
  Normal,
  Hard,
}

export default MemoryTileData;
