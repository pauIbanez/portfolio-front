import { render, screen } from "@testing-library/react";
import GameSection from "./GameSection";

describe("Given the GameSection component", () => {
  describe("When it's instanciated passing a title", () => {
    test("Then it should render the title as an h3", () => {
      const expectedTitle = "testTitle";

      render(
        <GameSection title={expectedTitle}>
          <></>
        </GameSection>
      );

      const foundTitle = screen.getByRole("heading", {
        level: 3,
        name: expectedTitle,
      });

      expect(foundTitle).toBeInTheDocument();
    });
  });
  describe("When it's instanciated passing some children", () => {
    test("Then it should render the children", () => {
      const expectedText = "test text";

      render(
        <GameSection title="title">
          <p>{expectedText}</p>
        </GameSection>
      );

      const foundText = screen.getByText(expectedText);

      expect(foundText).toBeInTheDocument();
    });
  });
});
