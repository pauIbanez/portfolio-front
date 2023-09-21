import { render, screen } from "@testing-library/react";
import CVPage from "./CVPage";
import userEvent from "@testing-library/user-event";

describe("Given the CVPage page", () => {
  describe("When it's intanciated", () => {
    test("Then it should render all the section titles", () => {
      const sectionTitles = [
        "CV.sections.education.title",
        "CV.sections.experience.title",
        "CV.sections.languages.title",
        "CV.sections.technologies.title",
        "CV.sections.references.title",
        "CV.sections.download.title",
      ];

      render(<CVPage />);

      sectionTitles.forEach((sectionTitle) => {
        const foundTitle = screen.getByRole("heading", {
          name: sectionTitle,
          level: 3,
        });

        expect(foundTitle).toBeInTheDocument();
      });
    });
  });

  describe("When it's intanciated and the GoToCV button is pressed", () => {
    test("Then it should call the ref's scrollTo", () => {
      const expectedButton = "CV.presentation.button chevron";

      render(<CVPage />);

      const foundButton = screen.getByRole("button", {
        name: expectedButton,
      });

      userEvent.click(foundButton);

      expect(Element.prototype.scrollTo).toHaveBeenCalled();
    });
  });
});
