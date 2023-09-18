import { screen } from "@testing-library/react";
import MinigamesPage from "./MinigamesPage";
import { renderInRouter } from "../../setupTests";

describe("Given the Minigames Page", () => {
  describe("When it's intanciated", () => {
    test("Then it should render a title and text", () => {
      const expectedTitle = "Minigames.title";
      const expectedText = "Minigames.text";

      renderInRouter(<MinigamesPage />);

      const foundTitle = screen.getByRole("heading", {
        level: 2,
        name: expectedTitle,
      });
      const foundText = screen.getByText(expectedText);

      expect(foundTitle).toBeInTheDocument();
      expect(foundText).toBeInTheDocument();
    });
  });
});
