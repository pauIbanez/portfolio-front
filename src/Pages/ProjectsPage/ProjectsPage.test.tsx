import { screen } from "@testing-library/react";
import { renderInRouter } from "../../setupTests";
import ProjectsPage from "./ProjectsPage";
import ProjectCards from "../../data/projects/Projects";
import userEvent from "@testing-library/user-event";

describe("Given the Projects page", () => {
  describe("When it's instanciated", () => {
    test("Then it should render a presentation title and text", () => {
      const expectedTitleName = "Projects.presentation.title";
      const expectedTextName = "Projects.presentation.text";

      renderInRouter(<ProjectsPage />);

      const foundPresentationTitle = screen.getByRole("heading", {
        level: 2,
        name: expectedTitleName,
      });
      const foundPresentationText = screen.getByText(expectedTextName);

      expect(foundPresentationTitle).toBeInTheDocument();
      expect(foundPresentationText).toBeInTheDocument();
    });
    test("Then it should render as many projectCards as projects in the ProjectCards list", () => {
      const expectedNumberOfCards = ProjectCards.length;

      renderInRouter(<ProjectsPage />);

      const foundCards = screen.getAllByTestId("project-card");

      expect(foundCards.length).toBe(expectedNumberOfCards);
    });
  });
  describe("When it's intanciated and the 'Go to projects' button is pressed", () => {
    test("Then it should call the ref's scrollTo", () => {
      const expectedButton = "Projects.presentation.button";

      renderInRouter(<ProjectsPage />);

      const foundButton = screen.getByRole("button", {
        name: expectedButton,
      });

      userEvent.click(foundButton);

      expect(window.scrollTo).toHaveBeenCalled();
    });
  });
});
