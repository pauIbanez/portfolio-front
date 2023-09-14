import { screen, render } from "@testing-library/react";
import { renderInRouter } from "../../../setupTests";
import Layout from "./Layout";
import { MemoryRouter } from "react-router-dom";

describe("Given the Layout component", () => {
  describe("When it's instanciated in the page home", () => {
    test("Then it should render the Pagetitle with text Presentation", () => {
      const expectedTitle = "Home.title";

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

  describe("When it's instanciated in a hidden page", () => {
    test("Then it should still render it's title", () => {
      const pathname = "/project/minigames";
      const expectedTitle = "Minigames.title";

      render(
        <MemoryRouter initialEntries={[pathname]}>
          <Layout />
        </MemoryRouter>
      );

      const foundTitle = screen.getByText(expectedTitle);

      expect(foundTitle).toBeInTheDocument();
    });
  });

  describe("When it's instanciated in a missing page", () => {
    test("Then it should render the notFound title", () => {
      const pathname = "/paasdasdad";
      const expectedTitle = "NotFound.title";

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
