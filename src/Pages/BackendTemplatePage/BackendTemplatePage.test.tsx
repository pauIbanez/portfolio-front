import { screen } from "@testing-library/react";
import { renderInRouter } from "../../setupTests";
import BackendTemplatePage from "./BackendTemplatePage";

describe("Given the BackendTemplate Page", () => {
  describe("When it's instanciated", () => {
    test("Then it should render a title and text", () => {
      const expectedTitle = "BackendTemplate.title";
      const expectedText = "BackendTemplate.text";

      renderInRouter(<BackendTemplatePage />);

      const foundTitle = screen.getByRole("heading", {
        level: 2,
        name: expectedTitle,
      });
      const foundText = screen.getByText(expectedText);

      expect(foundTitle).toBeInTheDocument();
      expect(foundText).toBeInTheDocument();
    });

    test("Then it should render 4 section titles", () => {
      const expectedNumberOfSections = 4;

      renderInRouter(<BackendTemplatePage />);

      const foundSections = screen.getAllByRole("heading", {
        level: 4,
      });

      expect(foundSections.length).toBe(expectedNumberOfSections);
    });
  });
});
