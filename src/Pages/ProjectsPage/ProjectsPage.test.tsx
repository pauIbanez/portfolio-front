import { screen } from "@testing-library/react";
import { renderInRouter } from "../../setupTests";
import ProjectsPage from "./ProjectsPage";

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
  });
});
