/* eslint-disable testing-library/no-unnecessary-act */
import { render, screen } from "@testing-library/react";
import Memory from "./Memory";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";

describe("Given the MemoryComponent", () => {
  describe("When it's instanciated", () => {
    test("Then it should render a title, text and 16 memoryTiles", () => {
      const expectedTitle = "Minigames.memory.title";
      const expectedText = "Minigames.memory.text";
      const expectedNumberOfTiles = 16;

      render(<Memory />);

      const foundTitle = screen.getByRole("heading", {
        level: 3,
        name: expectedTitle,
      });
      const foundText = screen.getByText(expectedText);
      const foundTiles = screen.getAllByTestId("memoryTile");

      expect(foundTitle).toBeInTheDocument();
      expect(foundText).toBeInTheDocument();
      expect(foundTiles.length).toBe(expectedNumberOfTiles);
    });
  });

  describe("When it's instanciated and the user has a minMoves for the easy dsifficulty", () => {
    test("Then it should render that minMoves", () => {
      const expectedMinMoves = "13";
      localStorage.setItem("memoryMoves0", expectedMinMoves);

      render(<Memory />);

      const foundText = screen.getByText(expectedMinMoves);
      expect(foundText).toBeInTheDocument();

      localStorage.clear();
    });
  });

  describe("When it's instanciated and the user clicks on a tile (not matching)", () => {
    test("Then it should not allow another tile to be clicked instantly", async () => {
      render(<Memory />);

      const foundTiles = screen.getAllByTestId("memoryTile");

      act(() => {
        userEvent.click(foundTiles[0]);
        userEvent.click(foundTiles[1]);
      });
    });
  });
});
