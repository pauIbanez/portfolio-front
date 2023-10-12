/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-unnecessary-act */
import { render, screen } from "@testing-library/react";
import Simon from "./Simon";
import { act } from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";
import Wait from "../../../../utils/Wait/Wait";
import simonColors from "../../../../data/minigames/simon/tileColors";
import toRGB from "../../../../utils/toRGB/toRGB";

describe("Given the Simon Game", () => {
  describe("When it's instanciated", () => {
    test("Then it should render a title and text", () => {
      const expectedTitle = "Minigames.simon.title";
      const expectedText = "Minigames.simon.text";

      render(<Simon />);

      const foundTitle = screen.getByRole("heading", {
        level: 3,
        name: expectedTitle,
      });

      const foundText = screen.getByText(expectedText);

      expect(foundTitle).toBeInTheDocument();
      expect(foundText).toBeInTheDocument();
    });
  });
  test("Then it should render 4 simontiles", () => {
    const expectedNumberOfTiles = 4;

    render(<Simon />);

    const foundTiles = screen.getAllByTestId("simontile");

    expect(foundTiles.length).toBe(expectedNumberOfTiles);
  });
  describe("When the user clicks on play", () => {
    test("Then the button should change to 'Restart Game'", async () => {
      const expectedPlayButton = "Minigames.simon.buttons.notPlaying";
      const expectedRestartButton = "Minigames.simon.buttons.playing";

      render(<Simon />);

      const foundButton = screen.getByRole("button");

      expect(foundButton.textContent).toBe(expectedPlayButton);

      await act(async () => {
        userEvent.click(foundButton);
        await Wait(1100);
      });

      expect(foundButton.textContent).toBe(expectedRestartButton);
    });
  });

  describe("When the localStorgae has a simonStrak key stored", () => {
    test("Then it should render that number", () => {
      const expectedMaxStreak = "10";
      localStorage.setItem("simonStreak", expectedMaxStreak);

      render(<Simon />);

      const foundMaxStreakIndiucator = screen.getByText(expectedMaxStreak);

      expect(foundMaxStreakIndiucator).toBeInTheDocument();
    });
  });

  describe("When the user clicks play and then clicks on correct tile", () => {
    test("Then the button should still say 'Restart Game'", async () => {
      const expectedPlayButton = "Minigames.simon.buttons.notPlaying";
      const expectedRestartButton = "Minigames.simon.buttons.playing";

      render(<Simon />);

      const foundButton = screen.getByRole("button");
      const foundTiles = document.querySelectorAll('[data-testid="simontile"]');

      expect(foundButton.textContent).toBe(expectedPlayButton);

      let activeTile: any;

      await act(() => {
        userEvent.click(foundButton);
      });

      const activeColors = simonColors.map((tileColors) =>
        toRGB(tileColors.showing)
      );
      foundTiles.forEach((tile) => {
        const tileStyle = window.getComputedStyle(tile);
        if (activeColors.includes(tileStyle.backgroundColor)) {
          activeTile = tile;
        }
      });

      await act(async () => {
        await Wait(1000);
      });

      await act(() => {
        userEvent.click(activeTile);
      });

      expect(foundButton.textContent).toBe(expectedRestartButton);
    });
  });

  describe("When the user clicks play and then clicks on incorrect tile", () => {
    test("Then the button should say 'Play Game'", async () => {
      const expectedPlayButton = "Minigames.simon.buttons.notPlaying";

      render(<Simon />);

      const foundButton = screen.getByRole("button");
      const foundTiles = document.querySelectorAll('[data-testid="simontile"]');

      expect(foundButton.textContent).toBe(expectedPlayButton);

      let inActiveTile: any;

      await act(() => {
        userEvent.click(foundButton);
      });

      const activeColors = simonColors.map((tileColors) =>
        toRGB(tileColors.showing)
      );
      foundTiles.forEach((tile) => {
        const tileStyle = window.getComputedStyle(tile);
        if (!activeColors.includes(tileStyle.backgroundColor)) {
          inActiveTile = tile;
        }
      });

      await act(async () => {
        await Wait(1100);
      });

      await act(() => {
        userEvent.click(inActiveTile);
      });

      expect(foundButton.textContent).toBe(expectedPlayButton);
    });
  });

  describe("When the user gets a streak with no previous max streak", () => {
    test("Then the UI should update", async () => {
      const expectedPlayButton = "Minigames.simon.buttons.notPlaying";
      const expectedMaxStreak = "1";

      render(<Simon />);

      const foundButton = screen.getByRole("button");
      const foundTiles = document.querySelectorAll('[data-testid="simontile"]');

      expect(foundButton.textContent).toBe(expectedPlayButton);

      let activeTile: any;

      await act(() => {
        userEvent.click(foundButton);
      });

      const activeColors = simonColors.map((tileColors) =>
        toRGB(tileColors.showing)
      );
      foundTiles.forEach((tile) => {
        const tileStyle = window.getComputedStyle(tile);
        if (activeColors.includes(tileStyle.backgroundColor)) {
          activeTile = tile;
        }
      });

      await act(async () => {
        await Wait(1000);
      });

      await act(() => {
        userEvent.click(activeTile);
      });

      await act(async () => {
        await Wait(2500);
      });

      let inactiveTile: any;

      foundTiles.forEach((tile) => {
        if (tile.textContent !== activeTile.textContent) {
          inactiveTile = tile;
        }
      });

      await act(async () => {
        await Wait(1100);
      });

      await act(() => {
        userEvent.click(inactiveTile);
      });
      await act(async () => {
        await Wait(100);
      });

      const foundMaxStreakIndiucator = screen.getByText(expectedMaxStreak);

      expect(foundMaxStreakIndiucator).toBeInTheDocument();
    });
  });

  describe("When the user gets a streak higher than the previous max streak", () => {
    test("Then the UI should update", async () => {
      const expectedPlayButton = "Minigames.simon.buttons.notPlaying";
      const expectedMaxStreak = "1";

      localStorage.setItem("simonStreak", "0");

      render(<Simon />);

      const foundButton = screen.getByRole("button");
      const foundTiles = document.querySelectorAll('[data-testid="simontile"]');

      expect(foundButton.textContent).toBe(expectedPlayButton);

      let activeTile: any;

      await act(() => {
        userEvent.click(foundButton);
      });

      const activeColors = simonColors.map((tileColors) =>
        toRGB(tileColors.showing)
      );
      foundTiles.forEach((tile) => {
        const tileStyle = window.getComputedStyle(tile);
        if (activeColors.includes(tileStyle.backgroundColor)) {
          activeTile = tile;
        }
      });

      await act(async () => {
        await Wait(1000);
      });

      await act(() => {
        userEvent.click(activeTile);
      });

      await act(async () => {
        await Wait(2500);
      });

      let inactiveTile: any;

      foundTiles.forEach((tile) => {
        if (tile.textContent !== activeTile.textContent) {
          inactiveTile = tile;
        }
      });

      await act(async () => {
        await Wait(1100);
      });

      await act(() => {
        userEvent.click(inactiveTile);
      });
      await act(async () => {
        await Wait(100);
      });

      const foundMaxStreakIndiucator = screen.getByText(expectedMaxStreak);

      expect(foundMaxStreakIndiucator).toBeInTheDocument();
    });
  });
  describe("When the user gets a streak lower than the previous max streak", () => {
    test("Then the UI should NOT update", async () => {
      const expectedPlayButton = "Minigames.simon.buttons.notPlaying";
      const expectedMaxStreak = "10";

      localStorage.setItem("simonStreak", expectedMaxStreak);

      render(<Simon />);

      const foundButton = screen.getByRole("button");
      const foundTiles = document.querySelectorAll('[data-testid="simontile"]');

      expect(foundButton.textContent).toBe(expectedPlayButton);

      let activeTile: any;

      await act(() => {
        userEvent.click(foundButton);
      });

      const activeColors = simonColors.map((tileColors) =>
        toRGB(tileColors.showing)
      );
      foundTiles.forEach((tile) => {
        const tileStyle = window.getComputedStyle(tile);
        if (activeColors.includes(tileStyle.backgroundColor)) {
          activeTile = tile;
        }
      });

      await act(async () => {
        await Wait(1100);
      });

      await act(() => {
        userEvent.click(activeTile);
      });

      await act(async () => {
        await Wait(2600);
      });

      let activeTile2: any;
      foundTiles.forEach((tile) => {
        const tileStyle = window.getComputedStyle(tile);
        if (activeColors.includes(tileStyle.backgroundColor)) {
          activeTile2 = tile;
        }
      });

      await act(async () => {
        await Wait(1500);
      });

      await act(() => {
        userEvent.click(activeTile);
      });

      await act(async () => {
        await Wait(100);
      });

      await act(() => {
        userEvent.click(activeTile2);
      });

      await act(async () => {
        await Wait(3500);
      });

      let inactiveTile: any;

      foundTiles.forEach((tile) => {
        if (tile.textContent !== activeTile.textContent) {
          inactiveTile = tile;
        }
      });

      await act(async () => {
        await Wait(1100);
      });

      await act(() => {
        userEvent.click(inactiveTile);
      });
      await act(async () => {
        await Wait(100);
      });

      const foundMaxStreakIndiucator = screen.getByText(expectedMaxStreak);

      expect(foundMaxStreakIndiucator).toBeInTheDocument();
    }, 15000);
  });
});
