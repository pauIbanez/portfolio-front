import { render, screen } from "@testing-library/react";
import MemoryTileData, {
  MemoryDifficulty,
} from "../../../../Types/MemoryTileData";
import MemoryTile from "./MemoryTile";
import tileImages from "../../../../data/minigames/memory/tileImages";

describe("Given the tileImages component", () => {
  describe("When it's instanciated with easy difficulty", () => {
    test("Then it should render the easy diffictulty image", () => {
      const tileData: MemoryTileData = {
        id: 1,
        isOpen: false,
        matched: false,
        tileValue: 0,
      };

      const expectedAltText = `tile icon - ${
        tileImages.easy[tileData.tileValue]
      }`;

      render(
        <MemoryTile
          canClick={true}
          currentDifficulty={MemoryDifficulty.Easy}
          id={tileData.id}
          isOpen={tileData.isOpen}
          matched={tileData.matched}
          onClick={() => null}
          tileValue={tileData.tileValue}
        />
      );

      const foundTileIcon = screen.getByAltText(expectedAltText);

      expect(foundTileIcon).toBeInTheDocument();
    });
  });

  describe("When it's instanciated with normal difficulty", () => {
    test("Then it should render the normal diffictulty image", () => {
      const tileData: MemoryTileData = {
        id: 1,
        isOpen: false,
        matched: false,
        tileValue: 0,
      };

      const expectedAltText = `tile icon - ${
        tileImages.normal[tileData.tileValue]
      }`;

      render(
        <MemoryTile
          canClick={true}
          currentDifficulty={MemoryDifficulty.Normal}
          id={tileData.id}
          isOpen={tileData.isOpen}
          matched={tileData.matched}
          onClick={() => null}
          tileValue={tileData.tileValue}
        />
      );

      const foundTileIcon = screen.getByAltText(expectedAltText);

      expect(foundTileIcon).toBeInTheDocument();
    });
  });

  describe("When it's instanciated with hard difficulty", () => {
    test("Then it should render the hard diffictulty image", () => {
      const tileData: MemoryTileData = {
        id: 1,
        isOpen: false,
        matched: false,
        tileValue: 0,
      };

      const expectedAltText = `tile icon - ${
        tileImages.hard[tileData.tileValue]
      }`;

      render(
        <MemoryTile
          canClick={true}
          currentDifficulty={MemoryDifficulty.Hard}
          id={tileData.id}
          isOpen={tileData.isOpen}
          matched={tileData.matched}
          onClick={() => null}
          tileValue={tileData.tileValue}
        />
      );

      const foundTileIcon = screen.getByAltText(expectedAltText);

      expect(foundTileIcon).toBeInTheDocument();
    });
  });
});
