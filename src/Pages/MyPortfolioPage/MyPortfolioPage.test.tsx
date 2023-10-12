import { screen } from "@testing-library/react";
import { renderInRouter } from "../../setupTests";
import MyPortfolioPage from "./MyPortfolioPage";

describe("Given MyPortoflio Page", () => {
  describe("When it's intanciated", () => {
    test("Then it should render a title and text", () => {
      const expectedTitle = "MyPortfolio.title";
      const expectedText = "MyPortfolio.text";

      renderInRouter(<MyPortfolioPage />);

      const foundTitle = screen.getByRole("heading", {
        level: 2,
        name: expectedTitle,
      });
      const foundText = screen.getByText(expectedText);

      expect(foundTitle).toBeInTheDocument();
      expect(foundText).toBeInTheDocument();
    });

    test("Then it should render 7 section titles", () => {
      const expectedNumberOfSections = 7;

      renderInRouter(<MyPortfolioPage />);

      const foundSections = screen.getAllByRole("heading", {
        level: 4,
      });

      expect(foundSections.length).toBe(expectedNumberOfSections);
    });
  });
});
