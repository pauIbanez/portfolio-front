import { render, screen } from "@testing-library/react";
import LanguagesSection from "./LanguagesSection";

describe("Given the LanguagesSection component", () => {
  describe("When it's instanciated", () => {
    test("Then it should render an h3 with 'CV.sections.languages.title'", () => {
      const expectedTitle = "CV.sections.languages.title";

      render(<LanguagesSection />);

      const foundTitle = screen.getByRole("heading", {
        name: expectedTitle,
      });

      expect(foundTitle).toBeInTheDocument();
    });

    test("Then it should render the 3 sections", () => {
      const expectedTitles = [
        "CV.sections.languages.sections.0",
        "CV.sections.languages.sections.1",
        "CV.sections.languages.sections.2",
      ];

      render(<LanguagesSection />);

      expectedTitles.forEach((expectedTitle) => {
        const foundTitle = screen.getByText(expectedTitle);
        expect(foundTitle).toBeInTheDocument();
      });
    });
  });
});
