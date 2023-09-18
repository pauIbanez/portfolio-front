import { fireEvent, render, screen } from "@testing-library/react";
import MemoryTileData, {
  MemoryDifficulty,
} from "../../../../Types/MemoryTileData";
import MemoryTile from "./MemoryTile";
import tileImages from "../../../../data/minigames/memory/tileImages";
import userEvent from "@testing-library/user-event";
import Wait from "../../../../utils/Wait/Wait";

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

  describe("When it's instanciated, not matched, already open and canClick as true and the user clicks on the tile", () => {
    test("Then it should NOT call onClick and pointer-events should be none", () => {
      const tileData: MemoryTileData = {
        id: 1,
        isOpen: true,
        matched: false,
        tileValue: 0,
      };

      const onClick = jest.fn();

      const expectedStyle = { pointerEvents: "none" };

      render(
        <MemoryTile
          canClick={true}
          currentDifficulty={MemoryDifficulty.Hard}
          id={tileData.id}
          isOpen={tileData.isOpen}
          matched={tileData.matched}
          onClick={onClick}
          tileValue={tileData.tileValue}
        />
      );

      const foundTile = screen.getByTestId("memoryTile");

      expect(foundTile).toHaveStyle(expectedStyle);

      fireEvent.click(foundTile);
      expect(onClick).not.toHaveBeenCalled();
    });
  });

  describe("When it's instanciated, not matched, not open and canClick as true and the user clicks on the tile", () => {
    test("Then it should call onClick", () => {
      const tileData: MemoryTileData = {
        id: 1,
        isOpen: false,
        matched: false,
        tileValue: 0,
      };

      const onClick = jest.fn();

      render(
        <MemoryTile
          canClick={true}
          currentDifficulty={MemoryDifficulty.Hard}
          id={tileData.id}
          isOpen={tileData.isOpen}
          matched={tileData.matched}
          onClick={onClick}
          tileValue={tileData.tileValue}
        />
      );

      const foundTile = screen.getByTestId("memoryTile");

      userEvent.click(foundTile);
      expect(onClick).toHaveBeenCalled();
    });
  });

  describe("When it's instanciated, and it's matched", () => {
    test("Then after 1s it should not throw an error and should not call onClick", async () => {
      const tileData: MemoryTileData = {
        id: 1,
        isOpen: true,
        matched: true,
        tileValue: 0,
      };

      const onClick = jest.fn();
      const expectedStyle = { pointerEvents: "none" };
      render(
        <MemoryTile
          canClick={true}
          currentDifficulty={MemoryDifficulty.Hard}
          id={tileData.id}
          isOpen={tileData.isOpen}
          matched={tileData.matched}
          onClick={onClick}
          tileValue={tileData.tileValue}
        />
      );

      const foundTile = screen.getByTestId("memoryTile");
      fireEvent.click(foundTile);
      expect(foundTile).toHaveStyle(expectedStyle);
      await Wait(1000);
      fireEvent.click(foundTile);
      expect(foundTile).toHaveStyle(expectedStyle);
      expect(onClick).not.toHaveBeenCalled();
    });
  });
});
