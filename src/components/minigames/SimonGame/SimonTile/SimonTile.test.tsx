/* eslint-disable testing-library/no-unnecessary-act */
import { render, screen } from "@testing-library/react";
import SimonTile from "./SimonTile";
import { act } from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";
import Wait from "../../../../utils/Wait/Wait";

describe("Given the simonTile component", () => {
  describe("When it's instanciated with a tileValue", () => {
    test("Then it should render the corresponding color", () => {
      const expectedColor = "Minigames.simon.colorNames.0";

      render(
        <SimonTile
          id={0}
          canClick={false}
          isShowing={true}
          onClick={() => null}
          tileValue={0}
        />
      );

      const foundText = screen.getByText(expectedColor);

      expect(foundText).toBeInTheDocument();
    });
  });
  describe("When it's instanciated with a pair tileValue", () => {
    test("Then it should render with height of 150px", () => {
      const expectedStyle = {
        height: "150px",
      };

      render(
        <SimonTile
          id={1}
          canClick={true}
          isShowing={true}
          onClick={() => null}
          tileValue={1}
        />
      );

      const foundTile = screen.getByTestId("simontile");

      expect(foundTile).toHaveStyle(expectedStyle);
    });
  });

  describe("When it's instanciated and the tile is clicked", () => {
    test("Then it should change the color", async () => {
      const expectedStyle = {
        backgroundColor: "#FAFF00",
      };

      render(
        <SimonTile
          id={0}
          canClick={true}
          isShowing={false}
          onClick={() => null}
          tileValue={0}
        />
      );

      const foundTile = screen.getByTestId("simontile");

      act(() => {
        userEvent.click(foundTile);
      });

      expect(foundTile).toHaveStyle(expectedStyle);
    });
  });

  describe("When it's instanciated and the tile is clicked and then waited", () => {
    test("Then it should change the color back", async () => {
      const expectedPulsatingStyle = {
        backgroundColor: "#FAFF00",
      };

      const expectedStyle = {
        backgroundColor: "#DAAA00",
      };

      render(
        <SimonTile
          id={0}
          canClick={true}
          isShowing={false}
          onClick={() => null}
          tileValue={0}
        />
      );

      const foundTile = screen.getByTestId("simontile");

      act(() => {
        userEvent.click(foundTile);
      });

      expect(foundTile).toHaveStyle(expectedPulsatingStyle);
      await act(async () => {
        await Wait(800);
      });

      expect(foundTile).toHaveStyle(expectedStyle);
    });
  });
});
