import { screen, render } from "@testing-library/react";
import { renderInRouter } from "../../setupTests";
import Layout from "./Layout";
import { MemoryRouter } from "react-router-dom";

describe("Given the Layout component", () => {
  describe("When it's instanciated in the page home", () => {
    test("Then it should render the Pagetitle with text Presentation", () => {
      const expectedTitle = "Presentation";

      renderInRouter(<Layout />);

      const foundTitle = screen.getByText(expectedTitle);

      expect(foundTitle).toBeInTheDocument();
    });

    test("Then it should render the NavBar", () => {
      renderInRouter(<Layout />);

      const foundNavBar = screen.getByRole("navigation");

      expect(foundNavBar).toBeInTheDocument();
    });
  });

  describe("When it's instanciated in a page with no title", () => {
    test("Then it should render the Pagetitle with text 'Project'", () => {
      const pathname = "/project/example";
      const expectedTitle = "Project";

      render(
        <MemoryRouter initialEntries={[pathname]}>
          <Layout />
        </MemoryRouter>
      );

      const foundTitle = screen.getByText(expectedTitle);

      expect(foundTitle).toBeInTheDocument();
    });
  });
});
